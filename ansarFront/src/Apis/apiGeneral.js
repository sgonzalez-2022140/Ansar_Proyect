import axios from "axios";

const apiClient = axios.create({
    //La base de nuestro server
    baseURL: 'http://localhost:2659/',
    timeout: 1000
})
apiClient.interceptors.request.use(
    (config) => {
        //extraemos el token de los headers
        const userDetails = localStorage.getItem('token')
        if (userDetails) {
            const token = JSON.parse(userDetails)
            config.headers.Authorization = `${token}`
            console.log(token)
        }
        return config
    },
    (err) => Promise.reject(err)
)

//Este es un api general pero lo pongo aqui por comodidad
export const loginRequest = async(user)=>{
    try {
        return await apiClient.post('/user/login', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}