const decodeToken = require('../utils/decodeToken');
const { User } = require('../../database/models');
require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret_key';

module.exports = async (req, res, next) => {

try {
  const token = req.header('Authorization');
  
  if (!token) {
    return next({ type: 'TOKEN_ERROR', message: 'Token not found' });
  }

  const { email } = jwt.verify(token, secret);

  const user = await User.findOne( { where: { email }, attributes: {exclude: ['id', 'password'] } } );

  if (!user) {
    return next({ type: 'UNAUTHORIZED_USER', message: 'Expired or invalid token' });
  }
  
  req.user = user;

  res.status(200).json({ role: user.role });
} catch (error) {
  return next(error)
}

 
  }
