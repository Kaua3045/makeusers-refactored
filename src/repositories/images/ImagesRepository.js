const { envConfig } = require('../../config/env')
const DiskStorage = require('../../database/imageStorages/diskStorage')

class ImagesRepository {
  async saveImage(file, finalFolder) {
    const diskStorage = new DiskStorage()

    if (!envConfig.multerStorage.storageType) {
      const result = await diskStorage.saveFileInFolder(file, finalFolder)
      return result
    }

    // IMPLEMENTAR O AWS S3
  }

  async deleteImage(file, finalFolder) {
    const diskStorage = new DiskStorage()

    if (!envConfig.multerStorage.storageType) {
      await diskStorage.deleteFile(file, finalFolder)
      return;
    }

    // IMPLEMENTAR O AWS S3
  }
}

module.exports = ImagesRepository