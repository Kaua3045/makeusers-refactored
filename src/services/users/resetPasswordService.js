const UserRepository = require('../../repositories/users/userRepository')
const HashRepository = require('../../repositories/hash/hashRepository')
const { passwordIsValid } = require('../../validators/userValidators')

const UserNotExistsError = require('../../errors/users/userNotExistsError')

module.exports = {
  async resetPassword(id, newPassword) {
    const userRepository = new UserRepository()
    const hashRepository = new HashRepository()
    const userExists = await userRepository.findById(id)

    if (!userExists) {
      throw new UserNotExistsError()
    }

    passwordIsValid(newPassword)

    const updatedPassword = await hashRepository.generateHash(newPassword, 8)
    await userRepository.update('password = $1', 'id = $2', [updatedPassword, id])
  }
}