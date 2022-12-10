const { createProduct } = require('./createProductService')
const { deleteProduct } = require('./deleteProductService')
const { getAllProductAndImages } = require('./getAllProductsService')
const { getProductById } = require('./getProductByIdService')

module.exports = {
  createProduct,
  deleteProduct,
  getAllProductAndImages,
  getProductById
}