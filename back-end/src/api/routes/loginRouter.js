const express = require('express');
const LoginController = require('../controllers/loginController');
const LoginValidation = require('../middlewares/loginValidation');

const loginRouter = express.Router();
const loginController = new LoginController();
const loginValidation = new LoginValidation();

loginRouter.post('/register', (req, res, next) => loginValidation.authentication(req, res, next),
 (req, res, next) => loginController.createUser(req, res, next));
loginRouter.post('/login', (req, res, next) => loginValidation.authentication(req, res, next),
 (req, res, next) => loginController.findUser(req, res, next));
// loginRouter.get('/validate', loginController.validation);

module.exports = loginRouter;