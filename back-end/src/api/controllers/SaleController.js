const ProductService = require('../services/productService');
const SaleProductService = require('../services/SaleProductsService');
const SaleService = require('../services/SaleService');

class SaleController {
  constructor() {
    this.service = new SaleService();
    this.saleProductService = new SaleProductService();
    this.productService = new ProductService();
  }

   async getAll(_req, res, next) {
    try {
      const result = await this.service.getAll();

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.getById(id);

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      // const productService = new ProductService();
      
      const sale = req.body;
      const { salesProducts } = sale;
      const newSale = await this.service.create(sale);

      const newSalesProducts = await Promise.all(salesProducts.map(async (saleProduct) => {
        await this.saleProductService.create(newSale.id, saleProduct);
        
        const product = await this.productService.getById(saleProduct.id);
        
        return {
          ...product.dataValues,
          quantity: saleProduct.quantity,
        };
      }));

      return res.status(200).json({ ...newSale.dataValues, salesProducts: newSalesProducts });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SaleController;
