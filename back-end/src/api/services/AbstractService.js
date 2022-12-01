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

    if (result) return { type: null, result };
    
    return { type: 'NOT_FOUND', message: 'Id not found' };
  }
}

module.exports = AbstractService;
