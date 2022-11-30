const express = require('express')
const userRouter = express.Router()

const { createUserController, getAllUsersController, getUserByIdController } = require('../controllers/userController')

userRouter.get('/all', getAllUsersController)
userRouter.get('/:id', getUserByIdController) // remove :id in future get id by req

userRouter.post('/create', createUserController)

module.exports = userRouter