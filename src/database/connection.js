const { Pool } = require('pg')
const { envConfig } = require('../config/env')

const client = new Pool({
  host: envConfig.database.host,
  port: envConfig.database.port,
  user: envConfig.database.user,
  password: envConfig.database.password,
  database: envConfig.database.database
})

const createConnection = async () => {
  await client.connect()
}

module.exports = { createConnection, client }