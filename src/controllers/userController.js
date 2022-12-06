const { createUser, getUserById, getAllUsers, resetPassword, updateProfile, updateAvatar, deleteUser } = require('../services/users')
const UserModel = require("../models/user")

module.exports = {
  async createUserController(req, res) {
    const { name, email, password } = req.body

    const user = new UserModel(name, email, password)

    const result = await createUser(user)

    return res.status(201).json(result)
  },

  async getUserByIdController(req, res) {
    const result = await getUserById(req.user.id)

    return res.json(result)
  },

  async getAllUsersController(req, res) {
    const result = await getAllUsers()

    return res.json(result)
  },

  async resetPasswordController(req, res) {
    const { id } = req.params
    const { newPassword } = req.body

    await resetPassword(id, newPassword)

    return res.status(200).end()
  },

  async updateProfileController(req, res) {
    const { name, email } = req.body

    const response = await updateProfile(req.user.id, name, email)

    return res.json(response)
  },

  async updateAvatarController(req, res) {
    const fileName = req.file.filename
    const user = await updateAvatar(req.user.id, fileName)

    return res.json(user)
  },

  async deleteUserController(req, res) {
    const { id } = req.params
    await deleteUser(id)

    return res.status(204).end()
  }
}