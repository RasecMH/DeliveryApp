const { Sale } = require('../../database/models');
const AbstractService = require('./AbstractService');

class SaleService extends AbstractService {
  constructor() {
    super(Sale);
  }
}

module.exports = SaleService;