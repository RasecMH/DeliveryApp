const { Router } = require('express');

const salesRouter = Router();

salesRouter.route('/:id')
  .get()
  .put();

salesRouter.route('/')
  .get()
  .post();

module.exports = salesRouter;