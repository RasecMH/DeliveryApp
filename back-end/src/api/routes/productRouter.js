const express = require('express');
const ProductController = require('../controllers/productContoller');

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get('/', (req, res, next) => productController.getAll(req, res, next));

module.exports = productRouter;