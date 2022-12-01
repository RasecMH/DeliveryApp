const { Product } = require('../../database/models');

class ProductService {
  constructor() {
    this.model = Product;
  }

  async getAll() {
    this.model = Product;
    const products = await this.model.findAll();
    return products;
  }
}

module.exports = ProductService;