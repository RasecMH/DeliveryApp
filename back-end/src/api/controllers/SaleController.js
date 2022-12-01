const SaleService = require('../services/SaleService');

class SaleController {
  constructor() {
    this.service = new SaleService();
  }

   async getAll(_req, res, next) {
    try {
      const result = await this.service.getAll();

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.service.getById(id);

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SaleController;
