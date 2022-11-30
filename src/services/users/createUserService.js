const UserRepository = require("../../repositories/users/userRepository")
const HashRepository = require('../../repositories/hash/hashRepository')
const UserModel = require("../../models/user")

const { validateAllUserData } = require('../../validators/validation')
const UserAlreadyExistsError = require('../../errors/users/userAlreadyExistsError')

module.exports = {
  async createUser(user) {
    validateAllUserData(user.name, user.email, user.password)

    const userRepository = new UserRepository()
    const hashRepository = new HashRepository()

    const userExists = await userRepository.findByEmail(user.email)

    if (userExists) {
      throw new UserAlreadyExistsError()
    }

    const encryptedPassword = await hashRepository.generateHash(user.password, 8)

    const userModel = new UserModel(
      user.name,
      user.email,
      encryptedPassword
    )
    userModel.id = user.id

    const userCreated = await userRepository.create(userModel) 

    return userCreated
  }
}