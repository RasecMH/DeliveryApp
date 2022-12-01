const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.JWT_SECRET || 'secret_key';

const decodeToken = (token) => {
  console.log("ooooi");
  console.log(token);
  const decoded = jwt.verify(token, secret);
  console.log(decoded);
  return email;
};

module.exports = decodeToken;