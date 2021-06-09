const db = require("../database/connections");
const choreController = {
  getChores(req, res, next) {
    console.log("inside the getChores controller");
    async function test() {
      await db.query(`SELECT * FROM app_user;`);
    }
    test();
  },
};
module.exports = choreController;