const { Router } = require('express');
const SaleController = require('../controllers/SaleController');

const salesRouter = Router();
const saleController = new SaleController();

salesRouter.route('/:id')
  .get((req, res, next) => saleController.getById(req, res, next))
  .put();

salesRouter.route('/')
  .get((req, res, next) => saleController.getAll(req, res, next))
  .post();

salesRouter.route('/create')
  .post((req, res, next) => saleController.create(req, res, next));

module.exports = salesRouter;
