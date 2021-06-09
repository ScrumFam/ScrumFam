const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController')

// '/users/
// middleware:
//  - house hold authorization?????
//  - DB fucntion to add the user
//  - format response object
//  - Respond w/ the user object 
router.post('/', 
  userController.addUser, 
  (req, res) => res.json(res.locals.user)
);

// Get all users for a household
// middleware:
//  - authorize that the user is a parent of the household
//  - DB fucntion to all the users and their data
//  - format response object
//  - Respond w/ success message
router.get('/house/:householdName',  
  (req, res) => res.json({})
);

// Get specific user object
// middleware:
//  - authorize is user OR is parent of household
//  - DB function to get the user object
//  - format response object
//  - respond w/ userObj
router.get('/:userId',
  // userController.getUser,  
  (req, res) => res.json({})
);

// delete user
// middleware:
//  - authorize that the user is a parent of the household
//  - DB fucntion to delete the user
//  - format response object
//  - Respond w/ success or error  
router.delete('/:userId',  
  (req, res) => res.json({})
);

// update user settings
// middleware: 
//  - authorize that the user is the one included
//  - DB call to update the user table
//  - format response object
//  - respond w/ updated userObj
router.patch('/:userId', 
  (req, res) => res.json({})
);

// update the users account balance
// middleware: 
//  - authorize that the user is the one included or a parent of the household
//  - DB call to update balance
//  - format response object
//  - respond with new balance 
router.put('/:userId/balance', 
  (req, res) => res.jsom({})
);


module.exports = router;