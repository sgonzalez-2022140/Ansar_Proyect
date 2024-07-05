'use strict'

import User from './user.model.js'
import jwt from 'jsonwebtoken'
import { encrypt, checkPassword } from '../utils/validator.js'
import { generateJwt } from '../utils/jwt.js'

export const userDefect = async(req,res) =>{
    try {
        const userExists = await User.findOne({username: 'ADMINISTRADOR'})        
        if(userExists){
           console.log('usuario existente')
        }else{
        const encryptPassword = await encrypt('ADMINISTRADOR')
        const newUser = new User({
            name: 'ADMINISTRADOR',
            lastname: 'ADMINISTRADOR',
            username: 'ADMINISTRADOR',
            password: encryptPassword,                                    
            phone: '12345678',
            role: 'ADMIN',            
        })
         
        await newUser.save()
    }   
    } catch (err) {
        console.error(err)
    }
} 

export const login = async(req, res) => {
    try {
        let {account, password} = req.body
        let user = await User.findOne({
            $or: [
                {username: account},
                {email: account}
            ]
        })
       if(user && await checkPassword(password, user.password)){
            let loggedUser = {
                uid: user._id,
                name: user.name,
                username: user.username,
                role: user.role
            }
            let token = await generateJwt(loggedUser)
            return res.send(
                {message: `Welcome ${loggedUser.name}`
                , loggedUser, token})
        }
        return res.status(400).send({message: `User not found`})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error to login'})
    }
}


export const register = async(req, res) =>{
    try {
        let data = req.body
        console.log(data)
        data.password = await encrypt(data.password)
        
        if (req.files && req.files.length > 0) {
            data.imagesUser = req.files.map(file => '/uploads/' + file.filename)
        }
        let user = new User(data)
        await user.save()
        return res.send({message: `Registro creado! Bienvenido ${user.name}`})
    } catch (error) {
        console.error(error)
        if(error.keyValue.username) return res.status(400).send({message: `username ${error.keyValue.username} is alredy taken ` })
        return res.status(500).send({message: 'Failed add User', error: error})
    }
}

