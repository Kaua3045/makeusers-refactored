const { createConnection, client} = require('./connection')

const createTables = async () => {
  await createConnection().then(async () => {
    await client.query(`
    CREATE TABLE IF NOT EXISTS users
    (id UUID PRIMARY KEY, name TEXT, email TEXT UNIQUE, password TEXT,
    admin BOOLEAN NOT NULL DEFAULT false, avatar TEXT)
    `)
  }).catch(console.error)
}

module.exports = createTables