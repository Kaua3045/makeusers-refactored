const { v4: uuid } = require('uuid')
const { envConfig } = require('../config/env')

class UserModel {
  id
  name
  email
  password
  isAdmin
  avatar
  avatar_url

  constructor (name, email, password, isAdmin = false, avatar = null, avatar_url = null) {
    if (!this.id) {
      this.id = uuid()
    }

    this.name = name
    this.email = email
    this.password = password
    this.isAdmin = isAdmin
    this.avatar = avatar
    this.avatar_url = avatar_url
  }

  static parseAvatarNameToUrl(avatarName) {
    return `${envConfig.server.serverUrl}/files/${avatarName}`
  }
}

module.exports = UserModel