class UnableToDeleteFileError extends Error {
  constructor() {
    super()
    this.name = 'common'
    this.message = 'could not delete file'
    this.statusCode = 500
  }
}

module.exports = UnableToDeleteFileError