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

      const answer = { name: user.name, email: user.email, role: user.role, token };
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

  async findAll(_req, res, next) {
    try {
      const findAll = await this.serviceLogin.findAll();

      res.status(200).json(findAll);
    } catch (error) {
      next(error);
    }
  }

  async findAllSellers(_req, res, next) {
    try {
      const findAllSellers = await this.serviceLogin.findAllSellers();

      res.status(200).json(findAllSellers);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params; 
      await this.serviceLogin.remove(id);

      res.status(204).json({ message: 'Deleted' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LoginController;
