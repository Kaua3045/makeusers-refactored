const multer = require("multer")
const { v4: uuid } = require('uuid')

const { tmpFolder } = require('../uploadsConfig')

module.exports = diskStorage = multer.diskStorage({
  destination: tmpFolder,
  filename: (req, file, cb) => {
    const newFilename = `${uuid()}-${file.originalname}`
    cb(null, newFilename)
  }
})