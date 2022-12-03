const { createUser } = require('./createUserService')
const { getUserById } = require('./getUserByIdService')
const { getAllUsers } = require('./getAllUsersService')
const { resetPassword } = require('./resetPasswordService')
const { updateProfile } = require('./updateProfileUserService')
const { updateAvatar } = require('./updateAvatarUserService')

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  resetPassword,
  updateProfile,
  updateAvatar
}