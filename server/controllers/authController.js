const bcrypt = require('bcrypt');
const database = require('../database/database');

module.exports = (database) => {

  const authController = {};

  authController.verifyParent = (req, res, next) => {
    
    try{
      const isParent = database.isParent(req.body.userId);
      if(!isParent) res.status(401).json({message: 'You must be a parent to access this functionality'});
      return next();
    }catch(err){
      return next({log: `ERROR in verifyParent Middleware: ${err.message}`});
    }

  }

  return authController;
}
