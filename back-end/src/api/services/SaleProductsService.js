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
}

module.exports = SaleProductService;