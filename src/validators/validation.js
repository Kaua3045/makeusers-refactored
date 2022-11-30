const { nameIsValid, emailIsValid, passwordIsValid} = require('./userValidators')

module.exports = {
  validateAllUserData(name, email, password) {
    nameIsValid(name)
    emailIsValid(email)
    passwordIsValid(password)
  }
}