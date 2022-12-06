const { verify } = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const decodeToken = (token) => {
  const { name } = verify(token, secret);
 
  return name;
};

module.exports = decodeToken;