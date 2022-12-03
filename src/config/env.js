module.exports = {
  envConfig: {
    server: {
      host: process.env.SERVER_HOST || 'localhost',
      port: process.env.SERVER_PORT || 8080,
      serverUrl: process.env.SERVER_URL || 'http://localhost:8080'
    },
    database: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'postgres'
    },
    multerStorage: {
      storageType: process.env.MULTER_STORAGE
    }
  }
}