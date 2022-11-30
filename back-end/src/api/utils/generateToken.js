const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'secret';

const generateToken = ({ id, name }) => {
  const token = jwt.sign({ id, name }, secret, {
    expiresIn: '15d',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = generateToken;