const express = require('express')
const adminRouter = express.Router()

const { 
  getAllAdminsController, 
  updateAdminController 
} = require('../controllers/adminController')
const { isAdmin } = require('../middlewares/adminMiddleware')
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticatedMiddleware')

adminRouter.get('/list', ensureAuthenticated, isAdmin, getAllAdminsController)
adminRouter.put('/update', ensureAuthenticated, isAdmin, updateAdminController)

module.exports = adminRouter