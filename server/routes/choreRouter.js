const { Router } = require("express");
const router = Router();

module.exports = (database) => {

  const choreController = require("../controllers/choreController")(database);

  // /chores
  // middleware:
  //  - DB fucntion to add the chore
  //  - format response object
  //  - Respond w/ the user object
router.post("/", choreController.addChore, (req, res) => {
  console.log(
    "inside the post route for the chore router. About to dispatch..."
  );
  // Please note - 'chore' is singular here!
  console.log(res.locals.chore);
  res.json(res.locals.chore);
});

  // //ALLAN THUNK TEST
  // router.get("/", choreController.getChores, (req, res) => {
  //   console.log("YOU REACHED HERE!");
  //   console.log(res.locals);
  //   res.json(res.locals.chores);
  // });

  // router.post("/", choreController.addChore, (req, res) => {
  //   res.json(res.locals.user);
  // });

  // Get all chores for a household
  // middleware:
  //  - authorize that the user is a parent of the household
  //  - DB fucntion to get all the chores for a specific household
  //  - format response object
  //  - Respond w/ success array of choreObj
  router.get("/house/:householdName",
    choreController.getAllChores, 
    (req, res) => res.json(res.locals.allChoresInHouse));
    

  // Get specific all chores for a specific user
  // middleware:
  //  - authorize is user
  //  - DB function to get all chores
  //  - format response object
  //  - respond w/ array of choreObj
  router.get("/user/:userId",
    choreController.getSpecificUsersChores,
   (req, res) => res.json(res.locals.userChores));

  // delete a chore
  // middleware:
  //  - authorize that the user is a parent of the household
  //  - DB fucntion to delete the chore
  //  - format response object
  //  - Respond w/ success message
  router.delete("/:choreId",
    choreController.deleteChore,
    (req, res) => res.status(200).send("All good, item deleted"));

  // mark Chore Complete
  // middleware:
  //   - authorize that the user is the one assigned OR parent of household OR member of household if unassigned
  //  - DB call to update chore status w/ completed_at timestamp
  //  - respond w/ sucess message
  router.patch("/:choreId/complete",
    choreController.choreComplete,
   (req, res) => res.status(200).send("All good, chore completed"));

  // mark Chore incomplete
  // middleware:
  //  - authorize that the user is the one assigned OR parent of household OR member of household if unassigned
  //  - DB call to update chore status w/ null for completed_at
  //  - respond w/ sucess message
  // router.patch("/:choreId/undoComplete",
  //   choreController.choreIncomplete, 
  //   (req, res) => res.status(200).send("Chore not completed"));

    //------------------------------------ possibly do down the road

  // // assign a chore to a childs account
  // // middleware:
  // //  - authorize that the user is the one included or a parent of the household
  // //  - DB call to update assigned_to in the row w/ the users userId
  // //  - format response object
  // //  - respond with choreObject? or success message
  // router.put("/:choreId/assign/:userId",
  //   choreController.
  //   (req, res) => res.jsom({}));

   // Get unassigned chores for a household
  // middleware:
  //  - authorize that the user is a member of the household
  //  - DB function to get all the unassigned chores for a specific household
  //  - format response object
  //  - Respond w/ success array of choreObj
  //router.get("/house/:householdName/unassigned", (req, res) => res.json({}));

  return router;

}