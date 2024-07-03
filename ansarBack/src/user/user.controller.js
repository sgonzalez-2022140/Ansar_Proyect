'use strict'

import User from './user.model.js'
import jwt from 'jsonwebtoken'
import { encrypt } from '../utils/validator.js'

export const userDefect = async(req,res) =>{
    try {
        const userExists = await User.findOne({username: 'ADMININISTRADOR'})        
        if(userExists){
           console.log('usuario existente')
        }else{
        const encryptPassword = await encrypt('ADMININISTRADOR')
        const newUser = new User({
            name: 'ADMININISTRADOR',
            lastname: 'ADMININISTRADOR',
            username: 'ADMININISTRADOR',
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
        return res.send({message: `Registered successfully,${user.nameUser} was registered`})
    } catch (error) {
        console.error(error)
        if(error.keyValue.username) return res.status(400).send({message: `username ${error.keyValue.username} is alredy taken ` })
        return res.status(500).send({message: 'Failed add User', error: error})
    }
}