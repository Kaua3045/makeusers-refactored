const jwt = require('jsonwebtoken')
const { envConfig } = require('../../config/env')

class AuthRepository {
  generateToken(data) {
    const token = jwt.sign(data, envConfig.jwtSecretKey, {
      expiresIn: '60m'
    })
    return token
  }

  verifyToken(token) {
    const data = jwt.verify(token, envConfig.jwtSecretKey)
    return data
  }
}

module.exports = AuthRepository