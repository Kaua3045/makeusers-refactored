const express = require('express')
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
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticatedMiddleware')

userRouter.get('/all', ensureAuthenticated, getAllUsersController)
userRouter.get('/', ensureAuthenticated, getUserByIdController)

userRouter.post('/create', createUserController)
userRouter.patch('/update', ensureAuthenticated, updateProfileController)
userRouter.patch('/resetpassword/:id', resetPasswordController)
userRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), updateAvatarController)

module.exports = userRouter