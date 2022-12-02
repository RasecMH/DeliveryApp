const { verify } = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const decodeToken = (token) => {
  const { name } = verify(token, secret);
 
  return name;
};

module.exports = decodeToken;