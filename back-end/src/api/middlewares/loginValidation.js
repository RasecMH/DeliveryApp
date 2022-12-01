const { validateLogin } = require('../validations/validations');

module.exports = (req, _res, next) => {
  const error = validateLogin(req.body);

  if (error.type) {
    next(error);
  }

  next();
};
