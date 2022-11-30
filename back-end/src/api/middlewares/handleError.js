const handleError = (error, _req, res, _next) => {
    const { status, message } = error;
    return res.status(status || 500).json({ message });
  };
  
  module.exports = handleError;