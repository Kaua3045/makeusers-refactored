const { createUser } = require('./createUserService')
const { getUserById } = require('./getUserByIdService')
const { getAllUsers } = require('./getAllUsersService')
const { resetPassword } = require('./resetPasswordService')
const {updateProfile} = require('./updateProfileUserService')

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  resetPassword,
  updateProfile
}