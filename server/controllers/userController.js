const bcrypt = require('bcrypt');
const database = require('../database/database');

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