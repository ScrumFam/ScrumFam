
const userController = {

  async addUser(req, res, next){
    const { username, password } = req.body
  
    const userId = await database.addUser({username, password});
  
    if (!password || !username) return next({log: `missing username or pw`});
  
    res.locals.userId = userId;
    return next();
  },

  getUser(req, res, next){
  
  },

};

module.exports = userController;