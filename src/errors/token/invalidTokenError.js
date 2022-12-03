class InvalidTokenError extends Error {
  constructor() {
    super()
    this.name = 'token'
    this.message = 'invalid token'
    this.statusCode = 401
  }
}

module.exports = InvalidTokenError