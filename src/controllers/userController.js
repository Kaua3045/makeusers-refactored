const { createUser, getUserById } = require('../services/users')
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
  }
}