const jwt = require('jsonwebtoken')
const { envConfig } = require('../../config/env')

class AuthRepository {
  async generateToken(data) {
    const token = await jwt.sign(data, envConfig.jwtSecretKey, {
      expiresIn: '60m'
    })
    return token
  }

  async verifyToken(token) {
    const data = await jwt.verify(token, envConfig.jwtSecretKey)
    return data
  }
}

module.exports = AuthRepository