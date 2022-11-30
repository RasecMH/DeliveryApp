const md5 = require('md5');
const { User } = require('../../database/models');

class LoginService {
  constructor() {
    this.model = new User();
  }

  async create({ email, password, name, role }) {
  //  const userExist = await User.findOne({ where: { name } });

  //   if (userExist) return null;

    const result = await this.model.create({
      email,
      password: md5(password),
      name,
      role,
    });
  
    return { email, name, role: result.role, id: result.id };
  }

  async findUser(email) {
  const userExist = await this.model.findOne({ where: { email } });
  return userExist;
  }
}

module.exports = LoginService;