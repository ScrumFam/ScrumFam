const bcrypt = require('bcrypt');


module.exports = (database) => {
  
  return ({

    async addUser(req, res, next){
      
      console.log('add User Controller');
      const { username, household, password } = req.body;
      if (!household) return res.status(400).json('user must have a household');
      if (!password || !username) return res.status(400).json('missing username or pw');
      
      try{ 
        await bcrypt.hash(password, 10, async (err, hash) => {
          console.log(hash)
          res.locals.user = await database.addUser({ username, household, hash });
          return next();
        });
        // add user to DB and responds with full user object
      }catch(err){
        return next({
          log: err.stack,
          message: {err: 'Error adding user. See server Logs'}
        });
      }
    },

  async getUser(req, res, next){
    console.log('made it to the user controller');
    try {    
      const { userId } = req.params;      
      console.log(req.params);    
      const specificUser = await database.getUser(userId);   
      res.locals.singleUser = specificUser; 
      return next(); 
    } catch(err) {
      return next(err);
    }    
  },

  async getAllUsers(req, res, next) {
    console.log('made it to the user controller');
    try {
      const { householdName } = req.params;
      const allUsers = await database.getAllUsers(householdName);
      res.locals.allUsersInHouse = allUsers;
      return next();
    } catch(err) {
      return next(err);
    }
  },

  async deleteUser(req, next) {
    console.log('made it to the user controller');
    try {
      const { userId } = req.params;
      const deleted = await database.deleteUser(userId);
      return next();
    } catch(err) {
      return next(err);
    }
  },

  
  // come back here and add all the available things to update
  async updateUser(req, res, next) {
    console.log('made it to the user controller');
    try {
      const { userId } = req.params;
      const { password } = req.body;
      const update = await database.updateUser(userId, password);
      res.locals.updatedUser = update;
      return next(); 
    } catch(err) {
      return next(err);
    }
  },

  async updateBalance(req, res, next) {
    console.log('made it to the user controller');
    try {
      const { userId } = req.params;
      const { balance } = req.body;
      const update = await database.updateBalance(userId, balance);
      res.locals.newBalance = update;
      return next();
    } catch(err) {
      return next(err);
    }
  }

 }); 
}


// '/users' -> all the actions relating to users and households


// Get all users for a household (GET `/users/house/:householdName
// Get a specific user data (GET '/users/:userId')
// Create a new user (POST '/users'
// Delete a user (DELETE '/users/:userId'
// Update a user settings (active_goal, password) (PATCH '/users/:userId')
// Update balance ("spend" money) (PUT '/users/:userId/balance/`

