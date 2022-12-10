const { v4: uuid } = require('uuid')
const { envConfig } = require('../config/env')

class ProductImage {
  id
  imageName
  url
  product_id

  constructor(imageName, product_id) {
    if (!this.id) {
      this.id = uuid()
    }

    this.imageName = imageName
    this.product_id = product_id
  }

  static parseProductImageNameToUrl(name) {
    return `${envConfig.server.serverUrl}/files/${name}`
  }
}

module.exports = ProductImage