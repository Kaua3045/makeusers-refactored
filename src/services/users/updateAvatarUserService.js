const UserRepository = require("../../repositories/users/userRepository")
const ImagesRepository = require('../../repositories/images/ImagesRepository')

const { avatarsFolder } = require("../../config/uploadsConfig")

const UserNotExistsError = require("../../errors/users/userNotExistsError")
const UserModel = require("../../models/user")

module.exports = {
  async updateAvatar(id, avatarFile) {
    const userRepository = new UserRepository()
    const imagesRepository = new ImagesRepository()

    const userExists = await userRepository.findById(id)

    if (!userExists) {
      throw new UserNotExistsError()
    }

    if (userExists.avatar) {
      await imagesRepository.deleteImage(userExists.avatar, avatarsFolder)
    }

    const avatarName = await imagesRepository.saveImage(avatarFile, avatarsFolder)

    userExists.avatar = avatarFile
    userExists.avatar_url = UserModel.parseAvatarNameToUrl(avatarName)

    await userRepository.update('avatar = $1', 'id = $2', [userExists.avatar, id])
    delete userExists.password

    return userExists
  }
}