const { getUserById } = require('../services/users')
const NotAdminError = require('../errors/admin/notAdminError')

module.exports = {
  async isAdmin(req, res, next) {
    const userId = req.user.id

    const { admin } = await getUserById(userId)

    if (admin === false) {
      throw new NotAdminError()
    }

    return next()
  }
}