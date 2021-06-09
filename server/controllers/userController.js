const bcrypt = require('bcrypt');

const userController = {

  async addUser(req, res, next){

    console.log('add User Controller');
    const { username, household, password } = req.body;
    if (!household) return res.status(400).json('user must have a household');
    if (!password || !username) return res.status(400).json('missing username or pw');

    try{ 
      await bcrypt.hash(password, 10, async (err, hash) => {
        res.locals.user = await database.addUser({ username, household, hash });
      });
      // add user to DB and responds with full user object
      return next();
    }catch(err){
      next({
        log: err.stack,
        message: {err: 'Error adding user. See server Logs'}
      });
    }
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