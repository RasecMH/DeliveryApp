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

  async getById(id) {
    this.model = Product;
    const product = await this.model.findOne({ where: { id } });
    return product;
  }
}

module.exports = ProductService;