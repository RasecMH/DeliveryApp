const ProductService = require('../services/productService');

class ProductController {
  constructor() {
    this.productService = new ProductService();
  }

   async getAll(_req, res, next) {
    try {
      const products = await this.productService.getAll();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
