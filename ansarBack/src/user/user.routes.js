import { Router } from 'express'
import { register, login } from './user.controller.js'
import { validateJwt, isAdmin, isDoctor, isWorker } from '../middlewares/validate_jwt.js'
//para imagenes
import { validateImage } from '../middlewares/storage.js'
const api = Router()

api.post('/register',validateImage.array('imageHotel', 10), [validateJwt, isAdmin], register)
api.post('/login', login)

export default api