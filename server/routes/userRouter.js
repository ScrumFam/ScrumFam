const { Router } = require('express');
// const database = require('../database/database');
const router = Router();

module.exports = (database) => {

  const userController = require('../controllers/userController')(database)
  const cookieController = require('../controllers/cookieController')(database)
  const sessionController = require('../controllers/sessionController')(database)
  // '/users/
  // middleware:
  //  - house hold authorization?????
  //  - DB fucntion to add the user
  //  - format response object
  //  - Respond w/ the user object 
  router.post('/', 
    userController.addUser,
    cookieController.setCookie,
    cookieController.setSSIDCookie,
    sessionController.startSession,
    sessionController.isLoggedIn, 
    (req, res) => res.json(res.locals.user)
  );

  router.post('/login',
    userController.verifyPassword,
    cookieController.setCookie,
    cookieController.setSSIDCookie,
    sessionController.startSession,
    sessionController.isLoggedIn,
    (req, res) => res.json({message: 'user is now logged in'})
  );

  // Get all users for a household
  // middleware:
  //  - authorize that the user is a parent of the household
  //  - DB fucntion to all the users and their data
  //  - format response object
  //  - Respond w/ success message
  router.get('/house/:householdName',
    userController.getAllUsers,    
    (req, res) => res.json(res.locals.allUsersInHouse)
  );

  // Get specific user object
  // middleware:
  //  - authorize is user OR is parent of household
  //  - DB function to get the user object
  //  - format response object
  //  - respond w/ userObj
  router.get('/:userId',
    userController.getUser,  
    (req, res) => res.json(res.locals.singleUser)
  );

  // delete user
  // middleware:
  //  - authorize that the user is a parent of the household
  //  - DB fucntion to delete the user
  //  - format response object
  //  - Respond w/ success or error  
  router.delete('/:userId',
    userController.deleteUser,  
    // userController.deleteUser,  
    (req, res) => res.status(200).send('All good, deleted one')
  );

  // update user settings
  // middleware: 
  //  - authorize that the user is the one included
  //  - DB call to update the user table
  //  - format response object
  //  - respond w/ updated userObj
  router.patch('/:userId',
    userController.updateUser,
    (req, res) => res.json("updated password")
  );

  // update the users account balance
  // middleware: 
  //  - authorize that the user is the one included or a parent of the household
  //  - DB call to update balance
  //  - format response object
  //  - respond with new balance 
  router.put('/:userId/balance',
    userController.updateBalance, 
    (req, res) => res.json(res.locals.newBalance)
  );
    return router
} 
