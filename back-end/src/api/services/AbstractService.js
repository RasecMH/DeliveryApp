const CustomError = require('../utils/CustomError');

class AbstractService {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    const result = await this.model.findAll();
    return result;
  }

  async getById(id) {
    const result = await this.model.findByPk(id);

    if (result) return result;
    
    throw new CustomError('NOT_FOUND', 'Id not found');
  }
}

module.exports = AbstractService;
