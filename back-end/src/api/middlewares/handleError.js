const { mapError } = require('../utils/errorMap');

const handleError = (error, _req, res, _next) => {
    const { message, type } = error;
    return res.status(mapError(type)).json({ message });
  };
  
  module.exports = handleError;