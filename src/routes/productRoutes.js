const express = require('express')
const productRouter = express.Router()

const { 
  getAllProductController, 
  getProductByIdController, 
  getProductImageByIdController, 
  getAllProductImagesController, 
  createProductImagesController, 
  createProductController, 
  deleteProductController, 
  deleteProductImageController 
} = require('../controllers/productController')

const { isAdmin } = require('../middlewares/adminMiddleware')
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticatedMiddleware')
const upload = require('../middlewares/uploadMiddleware')

productRouter.get('/', getAllProductController)
productRouter.get('/:id', getProductByIdController)
productRouter.get('/image/:id', getProductImageByIdController)
productRouter.get('/:id/images', getAllProductImagesController)

productRouter.post('/create', ensureAuthenticated, isAdmin, createProductController)
productRouter.patch('/create/images/:id', ensureAuthenticated, isAdmin, upload.array('images'), createProductImagesController)

productRouter.delete('/delete/:id', ensureAuthenticated, isAdmin, deleteProductController)
productRouter.delete('/delete/image/:id', ensureAuthenticated, isAdmin, deleteProductImageController)

module.exports = productRouter