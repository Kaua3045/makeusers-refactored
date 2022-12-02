const ImageTypeInvalidError = require('../errors/images/imageTypeInvalidError')

module.exports = checkFileType = (file, cb) => {
  const fileTypes = /jpeg|jpg|png/
  const extname = fileTypes.test(file.originalname)
  const mimetype = fileTypes.test(file.mimetype)

  if (mimetype && extname) {
    return cb(null, true)
  } else {
    return cb(new ImageTypeInvalidError(), false)
  }
}