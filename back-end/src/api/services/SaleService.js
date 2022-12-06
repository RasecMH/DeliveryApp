const { Sale, User } = require('../../database/models');
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

  async getById(saleId) {
    const sale = await this.model.findOne({
       where: { id: saleId },
       include: [
        { model: User, 
          as: 'seller', 
          attributes: ['name'], 
        },
      ],
      
      });
    return sale;
  }
}

module.exports = SaleService;