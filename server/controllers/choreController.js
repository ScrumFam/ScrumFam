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

  addChore(req, res, next) {
    console.log("inside the addChore controller");
  },
};

return choreController;
}
