const { Router } = require('express');

const categoriesRouter = Router();

categoriesRouter.route('/:id')
  .get()
  .put();

categoriesRouter.route('/')
  .get()
  .post();

module.exports = categoriesRouter;