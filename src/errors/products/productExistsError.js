class ProductExistsError extends Error {
  constructor() {
    super()
    this.name = 'product'
    this.message = 'product already exists'
    this.statusCode = 400
  }
} 

module.exports = ProductExistsError