class UserNotExistsError extends Error {
  constructor() {
    super()
    this.name = 'user'
    this.message = 'user not exists'
    this.statusCode = 400
  }
}

module.exports = UserNotExistsError