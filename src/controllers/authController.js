const { authenticate } = require("../services/auth/authService")

module.exports = {
  async authenticateController(req, res) {
    const { email, password } = req.body

    const result = await authenticate(email, password)
    return res.json(result)
  }
}