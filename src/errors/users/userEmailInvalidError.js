class UserEmailInvalidError extends Error {
  constructor() {
    super()
    this.name = 'user'
    this.message = 'the e-mail is invalid'
    this.statusCode = 400
  }
}

module.exports = UserEmailInvalidError