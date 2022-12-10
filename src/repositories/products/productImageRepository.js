const { client } = require('../../database/connection')
const ProductImage = require('../../models/productImage')

class ProductImageRepository {
  async findById(id) {
    const productImageDatabase = await client.query('SELECT * FROM products_images WHERE id = $1', [id])
    const productImageRow = productImageDatabase.rows[0]

    return productImageRow
  }

  async findAllImageWithProductId(product_id) {
    const productImageDatabase = await client.query('SELECT * FROM products_images WHERE product_id = $1', [product_id])

    const productImages = productImageDatabase.rows.map(imagesMap => {
      imagesMap.url = ProductImage.parseProductImageNameToUrl(imagesMap.imagename)

      return imagesMap
    })

    return productImages
  }

  async create(productImage) {
    await client.query(`
    INSERT INTO products_images (id, imageName, product_id) VALUES ($1, $2, $3)`,[
      productImage.id,
      productImage.imageName,
      productImage.product_id
    ])
  }

  async remove(id) {
    await client.query('DELETE FROM products_images WHERE id = $1', [id])
  }
}

module.exports = ProductImageRepository