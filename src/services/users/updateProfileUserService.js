const UserRepository = require('../../repositories/users/userRepository')
const { emailIsValid } = require('../../validators/userValidators')

const UserNotExistsError = require('../../errors/users/userNotExistsError')
const UserEmailAlreadyExistsError = require('../../errors/users/userEmailAlreadyExistsError')
const UserModel = require('../../models/user')

module.exports = {
  async updateProfile(id, name, email) {
    const userRepository = new UserRepository()
    const userExists = await userRepository.findById(id)

    if (!userExists) {
      throw new UserNotExistsError()
    }

    if (email) {
      emailIsValid(email)
      
      const userByEmail = await userRepository.findByEmail(email)
      
      if (userByEmail) throw new UserEmailAlreadyExistsError()
    }
    
    if (!name) {
      name = userExists.name
    }

    if (!email) {
      email = userExists.email
    }

    const userUpdated = await userRepository.update('name = $1, email = $2', 'id = $3 RETURNING id, name, email, avatar', [
      name,
      email,
      id
    ])

    if (userUpdated.avatar) {
      userUpdated.avatar_url = UserModel.parseAvatarNameToUrl(userUpdated.avatar)
    }

    return userUpdated
  }
}