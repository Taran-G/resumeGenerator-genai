const express = require('express')
const controller = require('../controller/user.controller')
const authRouter = express.Router()
const authMiddleware = require('../middleware/auth.middleware.js')

 
authRouter.post('/register',controller.registerUserController)
authRouter.post('/login',controller.loginUserController)
authRouter.get('/logout',controller.logoutUserController)
authRouter.get('/get-me',authMiddleware,controller.getMeController)


module.exports = authRouter;




