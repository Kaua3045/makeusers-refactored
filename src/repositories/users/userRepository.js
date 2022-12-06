const { client } = require('../../database/connection')
const UserModel = require('../../models/user')

class UserRepository {
  async findAllUsers() {
    const usersDatabase = await client.query('SELECT * FROM users')
    const usersToParse = usersDatabase.rows

    const users = usersToParse.map(user => {
      user.avatar_url = UserModel.parseAvatarNameToUrl(user.avatar)
      return user
    })

    return users
  }

  async findById(id) {
    const userDatabase = await client.query('SELECT * FROM users WHERE id = $1', [id])
    const user = userDatabase.rows[0]

    if (!user || !user.avatar) return user

    user.avatar_url = UserModel.parseAvatarNameToUrl(user.avatar)

    return user
  }

  async findByEmail(email) {
    const userDatabase = await client.query('SELECT * FROM users WHERE email = $1', [email])
    const user = userDatabase.rows[0]

    if (!user || !user.avatar) return user

    user.avatar_url = UserModel.parseAvatarNameToUrl(user.avatar)

    return user
  }

  async create(user) {
    const userDatabase = await client.query(`
    INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4)
    RETURNING id, name, email, password`,
    [
      user.id,
      user.name,
      user.email,
      user.password
    ])

    const userCreated = userDatabase.rows[0]

    return userCreated
  }

  async update(columnsToUpdate, whereIdentify, values) {
    const valueUpdatedDatabase = await client.query(`
    UPDATE users SET ${columnsToUpdate} WHERE ${whereIdentify}`, values)
    
    const valueUpdated = valueUpdatedDatabase.rows[0]

    return valueUpdated
  }

  async remove(id) {
    await client.query('DELETE FROM users WHERE id = $1', [id])
  }
}

module.exports = UserRepository