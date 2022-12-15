class AbstractService {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    const result = await this.model.findAll();
    return result;
  }
}

module.exports = AbstractService;
