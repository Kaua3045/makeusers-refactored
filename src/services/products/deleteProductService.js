const ProductNotExistsError = require("../../errors/products/productNotExistsError")
const ProductRepository = require("../../repositories/products/productRepository")
const { getProductById } = require('./getProductByIdService')
const { deleteAllProductImage } = require("./productImages")

module.exports = {
  async deleteProduct(id) {
    const productRepository = new ProductRepository()
    const product = await getProductById(id)

    if (!product) {
      throw new ProductNotExistsError()
    }

    await deleteAllProductImage(id)
    await productRepository.remove(id)
  }
}