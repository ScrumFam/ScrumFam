const db = require("../database/connections");

module.exports = (database) => {
  const choreController = {
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

    verifyChore(req, res, next) {
      console.log("inside the verifyCHore controller");
      console.log(req.body);

      res.locals.chore = req.body;
      next();
    },
  };

  return choreController;
};
