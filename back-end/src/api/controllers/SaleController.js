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

      return res.status(201).json({ ...newSale.dataValues, salesProducts: newSalesProducts });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id, status } = req.body;
      await this.service.update(id, status);
      
      const sale = await this.service.getById(id);
      const saleProducts = await this.saleProductService.getById(id);
      const saleProductUpdated = await Promise.all(saleProducts.map(async (saleProduct) => {
        const product = await this.productService.getById(saleProduct.productId);
        return {
          ...product.dataValues,
          quantity: saleProduct.quantity,
        };
      }));

      const saleUpdate = { ...sale.dataValues, salesProducts: saleProductUpdated };

      return res.status(200).json(saleUpdate);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SaleController;
