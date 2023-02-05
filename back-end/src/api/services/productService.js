const { Product } = require('../../database/models');
const CustomError = require('../utils/CustomError');

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

    if (product) return product;
    throw new CustomError('NOT_FOUND', 'Product not found');
  }
}

module.exports = ProductService;