const md5 = require('md5');
const { User } = require('../../database/models');
const CustomError = require('../utils/CustomError');

class loginService {
  constructor() { this.model = User; }

  async create({ email, password, name, role }) {
   const userExist = await this.model.findOne({ where: { email } });

    if (userExist) throw new CustomError('ALREADY_REGISTERED', 'user not available');

    const result = await this.model.create({
      email,
      password: md5(password),
      name,
      role,
    });
  
    return { email, name, role: result.role, id: result.id };
  }

 async findUser(email, password) {
  const passwordCompare = md5(password);
  const { dataValues } = await this.model.findOne({ 
    where: { email, password: passwordCompare }, 
    attributes: {exclude: ['id', 'password'] } 
  });

  if (!dataValues) throw new CustomError('NOT_FOUND', 'Incorrect username or password');

  return dataValues;
  }
}

module.exports = loginService;