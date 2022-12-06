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
  const dataValues = await this.model.findOne({ 
    where: { email, password: passwordCompare }, 
    attributes: { exclude: ['password'] }, 
  });

  if (!dataValues) throw new CustomError('NOT_FOUND', 'Incorrect username or password');

  return dataValues.dataValues;
  }

  async findAll() {
    const allUser = await this.model.findAll({
      attributes: { exclude: ['password'] },
    });
  
    if (!allUser) throw new CustomError('NOT_FOUND', 'Not found Users');
  
    return allUser;
    }

  async findAllSellers() {
    const allSellers = await this.model.findAll({
      where: { role: 'seller' },
      attributes: { exclude: ['password'] },
    });
  
    if (!allSellers) throw new CustomError('NOT_FOUND', 'Not found Sellers');
  
    return allSellers;
    }
}

module.exports = loginService;