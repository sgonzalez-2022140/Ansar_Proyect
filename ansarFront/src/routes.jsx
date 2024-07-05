import App from "./App"

// /////////////////////////////// //
// Rutas de las vistas de Usuario //
// /////////////////////////////// //
import { HomePrincipal } from "./Pages/User/HomePrincipal"
import { QuienesSomos } from "./Pages/User/QuienesSomos"
import { Programas } from "./Pages/User/Programas"
import { Contacto } from "./Pages/User/Contacto"
import { Galeria } from "./Pages/User/Galeria"
import LayoutMain from "./Components/User/LayoutMain"
//importamos login
import { Login } from "./Components/Login/Login"

// /////////////////////////////////// //
// Rutas de las vistas de Administrador //
// ////////////////////////////////// //
import { AdminHome } from "./Pages/ADMIN/AdminHome"

// /////////////////////////////////// //
// Rutas de las vistas de Doctor //
// ////////////////////////////////// //
import { HomeDoctor } from "./Pages/Doctor/HomeDoctor"


// /////////////////////////////////// //
// Rutas de las vistas de Traabajador //
// ////////////////////////////////// //
import { HomeWorker } from "./Pages/Worker/HomeWorker"


export const routes = [
    {
        path: '/',
        element: <LayoutMain><HomePrincipal /></LayoutMain>
    },
    {
        path: '/home',
        element: <LayoutMain><HomePrincipal /></LayoutMain>
    },
    {
        path: '/historia',
        element: <LayoutMain><QuienesSomos /></LayoutMain>
    },
    {
        path: '/programa',
        element: <LayoutMain><Programas /></LayoutMain>
    },
    {
        path: '/contacto',
        element: <LayoutMain><Contacto /></LayoutMain>
    },
    {
        path: '/galeria',
        element: <LayoutMain><Galeria /></LayoutMain>
    },
    //Ruta de Login jaja
    {
        path: '/login',
        element: <Login />
    },
     // //////////////////////// //
    // ///RUTAS DE ADMIN //// //
    // //////////////////////// //
    {
        path: '/ansar',
        element: <AdminHome />
    },


    // //////////////////////// //
    // ///RUTAS DE DOCTOR //// //
    // //////////////////////// //
    /*{
        path: '/ansar',
        element: <HomeDoctor />
    },


    // //////////////////////// //
    // //RUTAS DE TRABAJADOR // //
    // //////////////////////// //
    {
        path: '/ansar',
        element: <HomeWorker />
    }*/
]
