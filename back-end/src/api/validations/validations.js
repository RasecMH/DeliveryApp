const { loginSchema } = require('./schemas');

const validateLogin = (payload) => {
  const { error } = loginSchema.validate(payload);

  if (error) {
    return {
      type: 'INVALID_FIELD',
      message: 'field invalid',
    }; 
  }
  return { type: null };
};

module.exports = {
  validateLogin,
};