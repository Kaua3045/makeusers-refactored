const UserRepository = require('../../repositories/users/userRepository')
const HashRepository = require('../../repositories/hash/hashRepository')
const AuthRepository = require("../../repositories/auth/authRepository")

const UserNotExistsError = require('../../errors/users/userNotExistsError')

module.exports = {
  async authenticate(email, password) {
    const userRepository = new UserRepository()
    const hashRepository = new HashRepository()
    const authRepository = new AuthRepository()

    const userExists = await userRepository.findByEmail(email)

    if (!userExists) {
      throw new UserNotExistsError()
    }

    const passwordIsValid = await hashRepository.compareHash(password, userExists.password)

    if (!passwordIsValid) {
      throw new UserNotExistsError()
    }

    delete userExists.password

    const token = authRepository.generateToken({ id: userExists.id })

    return { userExists, token}
  }
}