const multer = require('multer')

const { envConfig } = require('../config/env')
const diskStorage = require('../config/uploads/diskStorageConfig')
const checkFileType = require('../utils/fileTypeCheck')

const upload = multer({
  storage: envConfig.multerStorage.storageType ? multer.storage() : diskStorage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
  }
})

module.exports = upload