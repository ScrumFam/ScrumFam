const bcrypt = require('bcrypt');


const authController = {};

authController.encryptNewPassword = (req, res, next) => {
  //reads password in res.locals
  const { username, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    console.log(err); 


    });


  //overwrites password with encrypted 
}

module.exports = authenticationController;