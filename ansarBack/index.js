import { initServer } from './config/app.js'
import { connect } from './config/mongo.js'
//declarar rutas por defecto
import { userDefect } from './src/user/user.controller.js'


initServer()
connect()
userDefect()
