const LoginService = require('../services/LoginService');
const generateToken = require('../utils/generateToken');
// const decodeToken = require('../utils/decodeToken');

class LoginController {
  constructor() {
    this.serviceLogin = new LoginService();
  }

  async createUser(req, res, next) {
    try {
      const { email, password, name, role } = req.body;

      const user = await this.serviceLogin.create({ email, password, name, role });

      const token = generateToken(user);

      const answer = { login: user.name, email: user.email, role: user.role, token };
      res.status(201).json(answer);
    } catch (error) {
      next(error);
    }
  }

  async findUser(req, res, next) {
    try {
      const { email, password } = req.body;

      const login = await this.serviceLogin.findUser(email, password);

      const token = generateToken(login);

      const answer = { ...login, token };

      res.status(200).json(answer);
    } catch (error) {
      next(error);
    }
  }

  // async validation(req, res) {
  //   const { authorization } = req.headers;

  //   if (!authorization) {
  //     return res.status(401).json({ message: 'unauthorized' });
  //   }
  //   const token = authorization.replace('Bearer ', '');

  //   const username = decodeToken(token);

  //   res.status(200).json(username);
  // }
}

module.exports = LoginController;
