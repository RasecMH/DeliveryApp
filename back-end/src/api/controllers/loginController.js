const LoginService = require('../services/loginService');
const generateToken = require('../utils/generateToken');

class LoginController {
  constructor() {
    this.serviceLogin = new LoginService();
  }

  async createUser(req, res, next) {
    try {
      const {
        email,
        password,
        name,
        role,
      } = req.body;
      const user = await this.serviceLogin.create({
        email,
        password,
        name,
        role,
      });
      const token = generateToken(user);
      res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  }

  async findUser(req, res, next) {
    try {
      const { email } = req.body;

      const login = await this.serviceLogin.findUser(email);

      if (!login) {
        return res.status(404).json({
        message: 'Incorrect username or password',
      }); 
}

      // const isPasswordValid = await compare(password, login.password);

      // if (!isPasswordValid) {
      //   return res.status(404).json({
      //     message: 'Incorrect username or password'
      //   });
      // }

      // const payload = {
      //   username: login.username
      // };

      // const token = generateToken(payload);

      res.status(200).json(login);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LoginController;
