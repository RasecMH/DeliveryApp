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

  async update(id, status) {
    console.log(id);
    const updatedSale = await this.model.update({ status }, { where: { id } });
    return updatedSale;
  }
}

module.exports = SaleService;