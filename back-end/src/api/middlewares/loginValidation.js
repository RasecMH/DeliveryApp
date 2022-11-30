    const authentication = (req, res, next) => {
    const { password } = req.body;

      if (!password || password.length < 6) {
      return res.status(422).json({ message: 'password invalid' });
    }
    
// const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
//     if (regex.test(email) === false) {
//       return res.status(422).json({ message: 'email invalid' });
//     }
  
    next();
  };

module.exports = authentication;