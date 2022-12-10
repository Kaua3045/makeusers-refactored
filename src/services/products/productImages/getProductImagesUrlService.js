const ProductImageRepository = require('../../../repositories/products/productImageRepository')

module.exports = {
  async getProductImagesUrl(product_id) {
    const productImageRepository = new ProductImageRepository()
    const result = await productImageRepository.findAllImageWithProductId(product_id)

    return result
  }
}