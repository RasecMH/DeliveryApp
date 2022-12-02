const { SaleProduct } = require('../../database/models');

class SaleProductService {
  constructor() {
    this.model = SaleProduct;
  }

  async create(saleId, saleProduct) {
    const newSaleProduct = await this.model.create({ 
      saleId, productId: saleProduct.id, quantity: saleProduct.quantity, 
    });
    return newSaleProduct;
  }

  async getById(saleId) {
    const saleProduct = await this.model.findAll({ where: { saleId } });
    return saleProduct;
  }
}

module.exports = SaleProductService;