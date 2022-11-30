module.exports = {
  envConfig: {
    server: {
      host: process.env.SERVER_HOST,
      port: process.env.SERVER_PORT,
      serverUrl: process.env.SERVER_URL
    },
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    }
  }
}