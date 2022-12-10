const ProductImageRepository = require('../../../repositories/products/productImageRepository')
const ImageNotExistsError = require('../../../errors/images/imageNotExistsError')
const ProductImage = require('../../../models/productImage')

module.exports = {
  async getProductImageById(id) {
    const productImageRepository = new ProductImageRepository()
    const imageExists = await productImageRepository.findById(id)

    if (!imageExists) {
      throw new ImageNotExistsError()
    }

    const productImage = new ProductImage(imageExists.imagename, imageExists.product_id)
    productImage.id = imageExists.id
    productImage.url = ProductImage.parseProductImageNameToUrl(imageExists.imagename)

    return productImage
  }
}