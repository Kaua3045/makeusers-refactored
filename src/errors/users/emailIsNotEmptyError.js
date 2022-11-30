class EmailIsNotEmptyError extends Error {
  constructor() {
    super()
    this.name = 'user'
    this.message = 'email cannot be empty'
    this.statusCode = 400
  }
}

module.exports = EmailIsNotEmptyError