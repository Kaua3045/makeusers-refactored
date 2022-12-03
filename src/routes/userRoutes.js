const express = require('express')
const { avatarsFolder } = require('../config/uploadsConfig')
const userRouter = express.Router()

const { 
  createUserController, 
  getAllUsersController, 
  getUserByIdController, 
  resetPasswordController, 
  updateProfileController,
  updateAvatarController
} = require('../controllers/userController')
const upload = require('../middlewares/uploadMiddleware')

userRouter.get('/all', getAllUsersController)
userRouter.get('/:id', getUserByIdController) // remove :id in future get id by req

userRouter.post('/create', createUserController)
userRouter.patch('/update/:id', updateProfileController)
userRouter.patch('/resetpassword/:id', resetPasswordController)
userRouter.patch('/avatar/:id', upload.single('avatar'), updateAvatarController) // remove :id in future get id by req

module.exports = userRouter