const db = require("../database/connections");

module.exports = (database) => {
  //const choreController = {
  return {
    async getChores(req, res, next) {
      console.log("inside the getChores controller");
      try {
        const test = await db.query(`SELECT * FROM chore;`);
        console.log(test);
        res.locals.chores = test;
        next();
      } catch (err) {
        console.log(err);
      }
    },

    //const choreController = {

    async getChores(req, res, next) {
      console.log("inside the getChores controller");
      try {
        const test = await db.query(`SELECT * FROM chore;`);
        console.log(test);
        res.locals.chores = test;
        return next();
      } catch (err) {
        return next(err);
      }
    },

    // addChore(req, res, next) {
    //   //wrap in try / catch if doing db call...
    //   console.log("inside the addChore controller");
    //   console.log(req.body);
    //   //still unsure how the db hookup happens here - via database.js, and then connections?
    //   res.locals.chore = req.body;
    //   next();
    // },

    async addChore(req, res, next) {
      //wrap in try / catch if doing db call...
      console.log("inside the addChore controller");
      console.log(req.body);
      try {
        const { assigned_to, description, created_at, reward } = req.body;
        const chore = await database.addChore(
          assigned_to,
          description,
          created_at,
          reward
        );
        console.log(chore);
        //still unsure how the db hookup happens here - via database.js, and then connections?
        res.locals.chore = chore;
        return next();
      } catch (err) {
        return next(err);
      }
    },

    async getAllChores(req, res, next) {
      console.log("made it to the getallchores");
      try {
        const { householdName } = req.params;
        const allChores = await database.getAllChores(householdName);
        console.log(allChores);
        res.locals.allChoresInHouse = allChores;
        return next();
      } catch (err) {
        return next(err);
      }
    },

    async deleteChore(req, res, next) {
      console.log("made it to the deletechore controller");
      try {
        const { choreId } = req.params;
        const deleted = await database.deleteChore(choreId);
        return next();
      } catch (err) {
        return next(err);
      }
    },

    async getSpecificUsersChores(req, res, next) {
      console.log("made it to the getSpecificUsersChores controller");
      try {
        const { userId } = req.params;
        const specificUserChores = await database.getSpecificUsersChores(
          userId
        );
        res.locals.userChores = specificUserChores;
        return next();
      } catch (err) {
        return next(err);
      }
    },

    async choreComplete(req, res, next) {
      console.log("made it to the choreComplete controller");
      try {
        const { choreId } = req.params;
        const choreCompleteConfirmation = await database.choreComplete(choreId);
        res.locals.choreComplete = choreCompleteConfirmation;
        return next();
      } catch (err) {
        return next(err);
      }
    },

    verifyChore(req, res, next) {
      console.log("inside the verifyCHore controller");
      console.log(req.body);

      res.locals.chore = req.body;
      next();
    },

    //return choreController;
  };
};
