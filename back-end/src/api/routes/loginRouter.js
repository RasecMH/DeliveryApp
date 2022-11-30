const express = require('express');
const LoginController = require('../controllers/loginController');

const loginRouter = express.Router();
const loginController = new LoginController();

loginRouter.post('/register', (req, res, next) => loginController.createUser(req, res, next));
loginRouter.post('/login', loginController.findUser);

module.exports = loginRouter;