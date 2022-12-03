class TokenIsMissingError extends Error {
  constructor() {
    super()
    this.name = 'token'
    this.message = 'Authorization token is missing'
    this.statusCode = 401
  }
}

module.exports = TokenIsMissingError