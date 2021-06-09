const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController')

// '/users/
router.post('/', userController.addUser, async(req, res) => {
  return res.json(res.locals.userId)
});

// Get all users for a household
router.get('/house/:householdName',  async (req, res) => {


})


router.get('/', (req, res) => {
  res.status(200).json({});
});

router.post('/', (req, res) => {
  res.status(200).jsom({});
});


module.exports = router;