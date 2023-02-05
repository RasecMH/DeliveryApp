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

  async getById(req, res, next) {
    const { id } = req.params;
    try {
      const product = await this.productService.getById(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
