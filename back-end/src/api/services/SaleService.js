const { Sale } = require('../../database/models');
const AbstractService = require('./AbstractService');

class SaleService extends AbstractService {
  constructor() {
    super(Sale);
    this.model = Sale;
  }

  async create(sale) {
    const newSale = await this.model.create(sale);
    return newSale;
  }
}

module.exports = SaleService;