const express = require('express')
const userRouter = express.Router()

const { createUserController } = require('../controllers/userController')

userRouter.post('/create', createUserController)

module.exports = userRouter