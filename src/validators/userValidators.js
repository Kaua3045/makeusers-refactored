const validator = require('validator')
const EmailIsNotEmptyError = require('../errors/users/emailIsNotEmptyError')
const UserEmailInvalidError = require('../errors/users/userEmailInvalidError')
const UserNameInvalidError = require('../errors/users/userNameInvalidError')
const UserPasswordEmptyError = require('../errors/users/userPasswordEmptyError')
const UserPasswordInvalidError = require('../errors/users/userPasswordInvalidError')

module.exports = {
  emailIsValid(email) {
    if (!email) throw new EmailIsNotEmptyError()

    const isValid = validator.isEmail(email)
    if(!isValid) throw new UserEmailInvalidError()
  },

  nameIsValid(name) {
    const empty = validator.isEmpty(name)
    if(empty === true) throw new UserNameInvalidError()
  },

  passwordIsValid(password) {
    const empty = validator.isEmpty(password)
    if (empty === true) throw new UserPasswordEmptyError()

    const isValid = validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0
    })

    if (isValid === false) throw new UserPasswordInvalidError()
  }
}