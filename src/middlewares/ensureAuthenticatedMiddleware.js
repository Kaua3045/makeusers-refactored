const AuthRepository = require('../repositories/auth/authRepository')

const TokenIsMissingError = require('../errors/token/tokenIsMissingError')
const InvalidTokenError = require('../errors/token/invalidTokenError')

module.exports = {
  ensureAuthenticated(req, res, next) {
    const authRepository = new AuthRepository()
    const authHeader = req.headers.authorization

    if (!authHeader) {
      throw new TokenIsMissingError()
    }

    const [, token] = authHeader.split(' ')

    try {
      const userData = authRepository.verifyToken(token)

      req.user = {
        id: userData.id
      }

      return next()
    } catch(error) {
      throw new InvalidTokenError()
    }
  }
}