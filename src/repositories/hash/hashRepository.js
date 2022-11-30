const bcrypt = require('bcrypt')

class HashRepository {
  async generateHash(toHash, salt) {
    const dataHashed = await bcrypt.hash(toHash, salt)

    return dataHashed
  }

  async compareHash(valueToCompare, valueHashed) {
    const valueCompared = await bcrypt.compare(valueToCompare, valueHashed)

    return valueCompared
  }
}

module.exports = HashRepository