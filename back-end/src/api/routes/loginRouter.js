const express = require('express');
const LoginController = require('../controllers/loginController');

const loginRouter = express.Router();
const loginController = new LoginController();

loginRouter.post('/register', loginController.createUser);
loginRouter.post('/login', loginController.findUser);

module.exports = loginRouter;