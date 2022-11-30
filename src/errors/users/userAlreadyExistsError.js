class UserAlreadyExistsError extends Error {
  constructor() {
    super()
    this.name = 'user'
    this.message = 'user already exists'
    this.statusCode = 400
  }
}

module.exports = UserAlreadyExistsError