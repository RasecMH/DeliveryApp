const express = require('express');
const LoginController = require('../controllers/loginController');
const authentication = require('../middlewares/loginValidation');

const loginRouter = express.Router();
const loginController = new LoginController();

loginRouter.post('/register', (req, res, next) => authentication(req, res, next),
 (req, res, next) => loginController.createUser(req, res, next));
loginRouter.post('/login', (req, res, next) => authentication(req, res, next),
 (req, res, next) => loginController.findUser(req, res, next));
// loginRouter.get('/validate', loginController.validation);

module.exports = loginRouter;