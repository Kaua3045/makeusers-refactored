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

const { ensureAuthenticated } = require('../middlewares/ensureAuthenticatedMiddleware')
const upload = require('../middlewares/uploadMiddleware')

productRouter.get('/', getAllProductController)
productRouter.get('/:id', getProductByIdController)
productRouter.get('/image/:id', getProductImageByIdController)
productRouter.get('/:id/images', getAllProductImagesController)

productRouter.post('/create', ensureAuthenticated, createProductController)
productRouter.patch('/create/images/:id', ensureAuthenticated, upload.array('images'), createProductImagesController)

productRouter.delete('/delete/:id', ensureAuthenticated, deleteProductController)
productRouter.delete('/delete/image/:id', ensureAuthenticated, deleteProductImageController)

module.exports = productRouter