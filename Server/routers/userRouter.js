
import {Router}from 'express'
import { signUp,login } from '../controllers/userController.js'
const userrouter = Router()

userrouter.post('/signup', signUp)

userrouter.get('/login', login)






export {userrouter}

