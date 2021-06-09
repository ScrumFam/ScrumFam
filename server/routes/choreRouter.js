const { Router } = require("express");
const router = Router();
const choreController = require("../controllers/choreController");

// /chores
// middleware:
//  - DB fucntion to add the chore
//  - format response object
//  - Respond w/ the user object

//ALLAN THUNK TEST
router.get("/", choreController.getChores, (req, res) => {
  console.log("YOU REACHED HERE!");
  console.log(res.locals);
  res.json(res.locals.chores);
});

router.post("/", choreController.addChore, (req, res) => {
  res.json(res.locals.user);
});

// Get all chores for a household
// middleware:
//  - authorize that the user is a parent of the household
//  - DB fucntion to get all the chores for a specific household
//  - format response object
//  - Respond w/ success array of choreObj
router.get("/house/:householdName", (req, res) => res.json({}));

// Get unassigned chores for a household
// middleware:
//  - authorize that the user is a member of the household
//  - DB function to get all the unassigned chores for a specific household
//  - format response object
//  - Respond w/ success array of choreObj
router.get("/house/:householdName/unassigned", (req, res) => res.json({}));

// Get specific all chores for a specific user
// middleware:
//  - authorize is user
//  - DB function to get all chores
//  - format response object
//  - respond w/ array of choreObj
router.get("/user/:userId", (req, res) => res.json({}));

// delete a chore
// middleware:
//  - authorize that the user is a parent of the household
//  - DB fucntion to delete the chore
//  - format response object
//  - Respond w/ success message
router.delete("/:choreId", (req, res) => res.json({}));

// mark Chore Complete
// middleware:
//   - authorize that the user is the one assigned OR parent of household OR member of household if unassigned
//  - DB call to update chore status w/ completed_at timestamp
//  - respond w/ sucess message
router.patch("/:choreId/complete", (req, res) => res.json({}));

// mark Chore incomplete
// middleware:
//  - authorize that the user is the one assigned OR parent of household OR member of household if unassigned
//  - DB call to update chore status w/ null for completed_at
//  - respond w/ sucess message
router.patch("/:choreId/undoComplete", (req, res) => res.json({}));

// assign a chore the users account balance
// middleware:
//  - authorize that the user is the one included or a parent of the household
//  - DB call to update assigned_to in the row w/ the users userId
//  - format response object
//  - respond with choreObject? or success message
router.put("/:choreId/assign/:userId", (req, res) => res.jsom({}));

module.exports = router;
