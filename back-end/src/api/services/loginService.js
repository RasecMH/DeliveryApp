const { User } = require('../../database/models');
const { Op } = require("sequelize");
const md5 = require("md5");

class loginService {

  create = async ({ email, password, name, role }) => {
  //  const userExist = await User.findOne({ where: { name } });

  //   if (userExist) return null;
  

    const result = await User.create({
      email,
      password: md5(password),
      name,
      role,
    });
  
    return { email, name, role: result.role, id: result.id };
  };


  findUser = async (email) => {
  const userExist = await User.findOne({ where: { email }});
  return userExist
  }
  
}

module.exports = loginService;