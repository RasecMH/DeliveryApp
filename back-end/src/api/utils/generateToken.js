const fs = require('fs');
const jwt = require('jsonwebtoken');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8') || 'secret_key';

const generateToken = ({ id, name, email }) => {
  const token = jwt.sign({ id, name, email }, secret, {
    expiresIn: '15d',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = generateToken;