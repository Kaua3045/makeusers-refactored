class ProductNotExistsError extends Error {
  constructor() {
    super()
    this.name = 'product'
    this.message = 'product does not exists'
    this.statusCode = 400
  }
}

module.exports = ProductNotExistsError