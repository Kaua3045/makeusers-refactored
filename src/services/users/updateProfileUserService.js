const UserRepository = require('../../repositories/users/userRepository')
const { emailIsValid } = require('../../validators/userValidators')

const UserNotExistsError = require('../../errors/users/userNotExistsError')
const UserEmailAlreadyExistsError = require('../../errors/users/userEmailAlreadyExistsError')

module.exports = {
  async updateProfile(id, {...rest}) {
    const userRepository = new UserRepository()
    const userExists = await userRepository.findById(id)

    if (!userExists) {
      throw new UserNotExistsError()
    }
    
    if (rest.email) {
      emailIsValid(rest.email)
      
      const userByEmail = await userRepository.findByEmail(rest.email)
      
      if (userByEmail) throw new UserEmailAlreadyExistsError()
    }

    if (rest.name && rest.name.length === 0) {
      rest.name = userExists.name
    }

    const userUpdated = Object.assign(userExists, rest)
    await userRepository.update('name = $1, email = $2', 'id = $3', [
      userUpdated.name,
      userUpdated.email,
      id
    ])
  }
}