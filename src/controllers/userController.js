const { createUser, getUserById, getAllUsers, resetPassword, updateProfile, updateAvatar } = require('../services/users')
const UserModel = require("../models/user")

module.exports = {
  async createUserController(req, res) {
    const { name, email, password } = req.body

    const user = new UserModel(name, email, password)

    const result = await createUser(user)

    return res.status(201).json(result)
  },

  async getUserByIdController(req, res) {
    const { id } = req.params
    // Substituir pelo req.user.id posteriormente (pega o id do user logado)
    const result = await getUserById(id)

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
    const { id } = req.params // depois pega do req.user.id
    const { name, email } = req.body

    await updateProfile(id, name, email)

    return res.status(204).end()
  },

  async updateAvatarController(req, res) {
    const { id } = req.params
    const fileName = req.file.filename
    const user = await updateAvatar(id, fileName)

    return res.json(user)
  }
}