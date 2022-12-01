const { Sales } = require('../../database/models');
const AbstractService = require('./AbstractService');

class SaleService extends AbstractService {
  constructor() {
    super(Sales);
  }
}

module.exports = SaleService;