const database = require('../database/database');


const userController = {

  async addUser(req, res, next){

    console.log('add User Controller');
    
    try{
      const { username, password } = req.body;
      if (!password || !username) return next({log: `missing username or pw`});
  
      const userObj = await database.addUserToDB({username, password});  
      res.locals.user = userObj;
      
    }catch(err){
      next(err);
    }

    return next();
  },

  getUser(req, res, next){
    
    const { userId } = req.body;

    database.getUserFromDB(userId)
      .then(data => res.locals.user = data.rows[0])
      .then(() =>  next())
      .catch((err) => next(err))
  },

};

module.exports = userController;