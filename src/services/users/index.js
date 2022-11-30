const { createUser } = require('./createUserService')
const { getUserById } = require('./getUserByIdService')
const { getAllUsers } = require('./getAllUsersService')

module.exports = {
  createUser,
  getUserById,
  getAllUsers
}