const { createProductImage } = require('./createProductImageService')
const { deleteAllProductImage, deleteProductImage } = require('./deleteProductImageService')
const { getProductImageById } = require('./getProductImageByIdService')
const { getProductImagesUrl } = require('./getProductImagesUrlService')

module.exports = {
  getProductImagesUrl,
  getProductImageById,
  deleteAllProductImage,
  deleteProductImage,
  createProductImage
}