const ProductRepository = require('../../repositories/products/productRepository')
const Product = require('../../models/product')
const ProductExistsError = require('../../errors/products/productExistsError')

module.exports = {
  async createProduct(productData) {
    const productRepository = new ProductRepository()
    const productExists = await productRepository.findByName(productData.name)

    if (productExists) {
      throw new ProductExistsError()
    }

    const productCreated = new Product(
      productData.name,
      productData.description,
      productData.price,
      productData.amount
    )
    productCreated.id = productData.id

    const result = await productRepository.create(productCreated)

    return result
  }
}