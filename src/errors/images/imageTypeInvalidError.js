class ImageTypeInvalidError extends Error {
  constructor() {
    super()
    this.name = 'image'
    this.message = 'this type of image is not accepted, accepted types are jpeg, jpg and png'
    this.statusCode = 400
  }
}

module.exports = ImageTypeInvalidError