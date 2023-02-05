const { Sale, User } = require('../../database/models');
const CustomError = require('../utils/CustomError');
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
    const updatedSale = await this.model.update({ status }, { where: { id } });
    return updatedSale;
  }

  async getById(id) {
    const sale = await this.model.findOne({
      where: { id },
      include: [{ model: User, as: 'seller', attributes: ['name'] }],
    });

    if (sale) {
      return sale;
    }
    throw new CustomError('NOT_FOUND', 'Sale not found');
  }
}

module.exports = SaleService;
