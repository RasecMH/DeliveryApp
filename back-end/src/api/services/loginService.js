const md5 = require('md5');
const { User } = require('../../database/models');

class loginService {
  constructor() { this.model = User; }

  async create({ email, password, name, role }) {
   const userExist = await this.model.findOne({ where: { name } });

    if (userExist) return null;

    const result = await User.create({
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

module.exports = loginService;