const fs = require('fs')
const path = require('path')

const { tmpFolder } = require('../../config/uploadsConfig')
const UnableToDeleteFileError = require('../../errors/common/unableToDeleteFileError')

class DiskStorage {
  async saveFileInFolder(file, newFolderPath) {
    await fs.promises.rename(
      path.resolve(tmpFolder, file),
      path.resolve(newFolderPath, file)
    )

    return file
  }

  async deleteFile(file, folder) {
    const filePath = path.resolve(folder, file)

    try {
      await fs.promises.stat(filePath)
    } catch (er) {
      throw new UnableToDeleteFileError()
    }

    await fs.promises.unlink(filePath)
  }
}

module.exports = DiskStorage