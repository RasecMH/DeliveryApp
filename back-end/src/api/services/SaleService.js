const { Sale } = require('../../database/models');
const AbstractService = require('./AbstractService');

class SaleService extends AbstractService {
  constructor() {
    super(Sale);
    this.model = Sale;
  }

  // async create(sale) {
  //   const { user_id, seller_id, total_price, delivery_address, delivery_number, status, salesProducts } = sale;
  //   const newSale = await this.model.create(user_id, seller_id, total_price, delivery_address, delivery_number, status);
  //   console.log(newSale);
  // }
}

module.exports = SaleService;