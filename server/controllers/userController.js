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

//   async getUser(req, res, next){
//     console.log('made it to the user controller');
//     try {    
//     const { userId } = req.body.id;
//     const specificUser = await database.getUserFromDB(userId);
//     res.locals.singleuser = specificUser;     
//     } catch(err) {
//       next(err);
//     }
//     return next();
//   },

 };




// '/users' -> all the actions relating to users and households


// Get all users for a household (GET `/users/house/:householdName
// Get a specific user data (GET '/users/:userId')
// Create a new user (POST '/users'
// Delete a user (DELETE '/users/:userId'
// Update a user settings (active_goal, password) (PATCH '/users/:userId')
// Update balance ("spend" money) (PUT '/users/:userId/balance/`

module.exports = userController;