require('dotenv/config')

const express = require('express')
const cors = require('cors')

const createTables = require('../database/tables')

const server = express()
createTables()

server.use(cors())
server.use(express.json())

module.exports = server