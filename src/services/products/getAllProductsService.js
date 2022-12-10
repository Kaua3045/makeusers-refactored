const ProductRepository = require('../../repositories/products/productRepository')
const Product = require('../../models/product')
const ProductImage = require('../../models/productImage')

module.exports = {
  async getAllProductAndImages() {
    const productRepository = new ProductRepository()
    let productsDatabase = await productRepository.findAllProducts()

    const products = productsDatabase.map(productMap => {
      const product = new Product(
        productMap.name,
        productMap.description,
        productMap.price,
        productMap.amount
      )
      product.id = productMap.id

      product.productImages = productMap.images ? productMap.images.map(img => {
        const produtImage = new ProductImage(img.imageName, product.id)
        produtImage.id = img.id
        produtImage.url = ProductImage.parseProductImageNameToUrl(img.imageName)

        return produtImage
      }) : []

      return product
    })

    return products
  }
}