require('dotenv/config')
require('express-async-errors')

const express = require('express')
const cors = require('cors')

const createTables = require('../database/tables')
const router = require('../routes')

const { errorsMiddleware } = require('../middlewares/errorsMiddlewares')

const server = express()
createTables()

server.use(cors())
server.use(express.json())
server.use('/api', router)
server.use('/files', express.static('tmp/avatars'))
server.use(errorsMiddleware)

module.exports = server