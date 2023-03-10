const express = require('express');
const LoginController = require('../controllers/loginController');

const { newUserValidation, loginValidation, tokenValidation } = require('../middlewares');

const loginRouter = express.Router();
const loginController = new LoginController();

loginRouter.post(
  '/register',
  (req, res, next) => newUserValidation(req, res, next),
  (req, res, next) => loginController.createUser(req, res, next),
);

loginRouter.post(
  '/login',
  (req, res, next) => loginValidation(req, res, next),
  (req, res, next) => loginController.findUser(req, res, next),
);

loginRouter.get(
  '/validate',
  (req, res, next) => tokenValidation(req, res, next),
);

loginRouter.get(
  '/all',
  (req, res, next) => loginController.findAll(req, res, next),
);

loginRouter.get(
  '/all/sellers',
  (req, res, next) => loginController.findAllSellers(req, res, next),
);

loginRouter.delete(
  '/:id',
  (req, res, next) => loginController.remove(req, res, next),
);

module.exports = loginRouter;