const express = require('express')
const authRouter = express.Router()

const { authenticateController } = require('../controllers/authController')

authRouter.post('/', authenticateController)

module.exports = authRouter