const multer = require('multer')
const { v4: uuid } = require('uuid')

const { envConfig } = require('../config/env')
const { tmpFolder } = require('../config/uploadsConfig')
const checkFileType = require('../utils/fileTypeCheck')

const diskStorage = multer.diskStorage({
  destination: tmpFolder,
  filename: (req, file, cb) => {
    const newFilename = `${uuid()}-${file.originalname}`
    cb(null, newFilename)
  }
})

const upload = multer({
  storage: envConfig.multerStorage.storageType ? multer.storage() : diskStorage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
  }
})

module.exports = upload