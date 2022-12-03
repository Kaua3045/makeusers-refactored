const { avatarsFolder } = require("../../config/uploadsConfig")
const UserNotExistsError = require("../../errors/users/userNotExistsError")
const ImagesRepository = require("../../repositories/images/ImagesRepository")
const UserRepository = require("../../repositories/users/userRepository")

module.exports = {
  async deleteUser(id) {
    const userRepository = new UserRepository()
    const imageRepository = new ImagesRepository()

    const userExists = await userRepository.findById(id)

    if (!userExists) {
      throw new UserNotExistsError()
    }

    await imageRepository.deleteImage(userExists.avatar, avatarsFolder)
    await userRepository.remove(id)
  }
}