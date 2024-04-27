import express from 'express'
import { loginUser, registerUSer } from '../controllers/UserController.js'

const UserRouter = express.Router()

UserRouter.post("/register", registerUSer)
UserRouter.post("/login", loginUser)

export default UserRouter