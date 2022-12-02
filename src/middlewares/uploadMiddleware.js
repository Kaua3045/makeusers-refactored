const path = require('path')

const multer = require('multer')
const { v4: uuid } = require('uuid')

const { envConfig } = require('../config/env')
const { tmpFolder } = require('../config/uploadsConfig')

const ImageTypeInvalidError = require('../errors/images/imageTypeInvalidError')

const diskStorage = multer.diskStorage({
  destination: tmpFolder,
  filename: (req, file, cb) => {
    const newFilename = `${uuid()}-${file.originalname}`
    cb(null, newFilename)
  }
})

const checkFileType = (file, cb) => {
  const fileTypes = /jpeg|jpg|png/
  const extname = fileTypes.test(file.originalname)
  const mimetype = fileTypes.test(file.mimetype)

  if (mimetype && extname) {
    return cb(null, true)
  } else {
    return cb(new ImageTypeInvalidError(), false)
  }
}

const upload = multer({
  storage: envConfig.multerStorage.storageType ? multer.storage() : diskStorage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
  }
})

module.exports = upload