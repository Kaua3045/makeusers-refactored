require('dotenv/config')

const express = require('express')
const cors = require('cors')

const createTables = require('../database/tables')
const router = require('../routes')

const server = express()
createTables()

server.use(cors())
server.use(express.json())
server.use('/api', router)

module.exports = server