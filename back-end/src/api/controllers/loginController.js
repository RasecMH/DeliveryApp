const md5 = require('md5');
const LoginService = require('../services/loginService');
const generateToken = require('../utils/generateToken');
// const decodeToken = require('../utils/decodeToken');

class loginController {
  constructor() {
    this.serviceLogin = new LoginService();
  }

  async createUser(req, res, next) {
    try {
      const { email, password, name, role } = req.body;

      console.log(name);

      const user = await this.serviceLogin.create({ email, password, name, role });

      if (!user) {
        return res.status(409).json({
          message: 'user not available',
        });
      }

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

      const login = await this.serviceLogin.findUser(email);

      if (!login) {
        return res.status(404).json({ message: 'Incorrect username or password' });
      }

      const token = generateToken(login);

      const answer = { login: login.name, email: login.email, role: login.role, token };

      const passwordCompare = md5(password);

      if (passwordCompare !== login.password) {
        return res.status(404).json({
          message: 'Incorrect username or password',
        });
      }

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

module.exports = loginController;
