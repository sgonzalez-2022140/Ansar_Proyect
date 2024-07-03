//Configuramos la conexión a la db
'use strict'

import mongoose, {Mongoose, mongo} from "mongoose"

export const connect = async() => {
    try {
        mongoose.connection.on('error', () =>{
            console.log('MongoDB | could not be conect to mongodb')
            mongoose.disconnect()
        })
        mongoose.connection.on('connecting', () => {
            console.log('MongoDB | try connecting')
        })
        mongoose.connection.on('connected', () => {
            console.log('MongoDB | connected to mongodb')
        })
        mongoose.connection.once('open', ()=> {
            console.log('MongoDB | connected to database')
        })
        mongoose.connection.on('reconected', ()=>{
            console.log('MongoDB | reconected to mongodb')
        } )
        mongoose.connection.on('disconected', () =>{
            console.log('MongoDB | disconected to mongodb')
        })
        await mongoose.connect(process.env.URI_MONGO, {
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 50
        })
    } catch (error) {
        console.error(error)

    }
}