const ProductImageRepository = require('../../../repositories/products/productImageRepository')
const ProductRepository = require('../../../repositories/products/productRepository')
const ImageRepository = require('../../../repositories/images/ImagesRepository')
const { imagesProductsFolder } = require('../../../config/uploadsConfig')
const ProductImage = require('../../../models/productImage')

module.exports = {
  async createProductImage(productImages, id) {
    const productRepository = new ProductRepository()
    const productImageRepository = new ProductImageRepository()
    const imageRepository = new ImageRepository()

    const productExists = await productRepository.findById(id)

    if (productExists) {
      const imagesMap = productImages.imageName.map(img => {
        return img.filename
      })

      for (let i = 0; i < imagesMap.length; i++) {
        const imageFile = await imageRepository.saveImage(imagesMap[i], imagesProductsFolder)
        const productImageCreated = new ProductImage(imageFile, id)

        await productImageRepository.create(productImageCreated)
      }
    }
  }
}