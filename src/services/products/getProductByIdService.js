const ProductRepository = require('../../repositories/products/productRepository')
const Product = require('../../models/product')
const { getProductImagesUrl } = require('./productImages')
const ProductNotExistsError = require('../../errors/products/productNotExistsError')

module.exports = {
  async getProductById(id) {
    const productRepository = new ProductRepository()
    const productExistsInDatabase = await productRepository.findById(id)

    if (!productExistsInDatabase) {
      throw new ProductNotExistsError()
    }

    const productImages = await getProductImagesUrl(id)

    const product = new Product(
      productExistsInDatabase.name,
      productExistsInDatabase.description,
      productExistsInDatabase.price,
      productExistsInDatabase.amount
    )
    product.id = productExistsInDatabase.id
    product.productImages = productImages ? productImages : 'not images'

    return product
  }
}