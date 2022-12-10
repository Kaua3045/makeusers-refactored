const ProductImageRepository = require('../../../repositories/products/productImageRepository')
const ImageRepository = require('../../../repositories/images/ImagesRepository')
const ImageNotExistsError = require('../../../errors/images/imageNotExistsError')
const { imagesProductsFolder } = require('../../../config/uploadsConfig')

module.exports = {
  async deleteAllProductImage(product_id) {
    const productImageRepository = new ProductImageRepository()
    const imageRepository = new ImageRepository()
    const productImageExists = await productImageRepository.findAllImageWithProductId(product_id)

    const imagesName = productImageExists.map(image => {
      return image.imagename
    })

    for (let i = 0; i < imagesName.length; i++) {
      await imageRepository.deleteImage(imagesName[i], imagesProductsFolder)
    }
  },

  async deleteProductImage(id) {
    const productImageRepository = new ProductImageRepository()
    const imageRepository = new ImageRepository()

    const productImageExists = await productImageRepository.findById(id)

    if (!productImageExists) {
      throw new ImageNotExistsError()
    }

    await productImageRepository.remove(productImageExists.id)
    await imageRepository.deleteImage(productImageExists.imagename, imagesProductsFolder)
  }
}