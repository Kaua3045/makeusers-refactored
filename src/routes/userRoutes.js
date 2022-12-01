const express = require('express')
const userRouter = express.Router()

const { 
  createUserController, 
  getAllUsersController, 
  getUserByIdController, 
  resetPasswordController 
} = require('../controllers/userController')

userRouter.get('/all', getAllUsersController)
userRouter.get('/:id', getUserByIdController) // remove :id in future get id by req

userRouter.post('/create', createUserController)
userRouter.patch('/resetpassword/:id', resetPasswordController)

module.exports = userRouter