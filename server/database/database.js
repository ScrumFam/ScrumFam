const db = require("./connections");

const addUser = async ({ username, household, hash }) => {
  console.log("addUser to DB query");
  const query = `
  INSERT INTO app_user ("username", "household", "password") 
  VALUES ($1, $2, $3)
  RETURNING *`;
  const values = [username, household, hash];

  try {
    const response = await db.query(query, values);
    const user = response.rows[0];
    delete user.password;
    return user;
  } catch (err) {
    console.log(err);
  }
};

const addChore = async ({ assigned_to, description, created_at, reward }) => {
  console.log("addChore to DB query");
  const query = `
    INSERT INTO chore ("assigned_to", description",
      "created_at",

      "reward")
      VALUES ($1, $2, $3, $4)
      RETURNING *`;
  const values = [assigned_to, description, created_at, reward];
  try {
    const response = await db.query(query, values);
    const chore = response.rows[0];
    return chore;
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (userId) => {
  console.log("made it to the getuser query");
  const query = `
  SELECT * FROM app_user
  WHERE id = $1`;
  const value = [userId];
  try {
    const response = await db.query(query, value);
    console.log(response);
    const certainUser = response.rows[0];
    delete certainUser.password;
    console.log("this is the rows object", certainUser);
    return certainUser;
  } catch (err) {
    console.log(err);
  }
};

const getAllUsers = async (householdName) => {
  console.log("made it to the getAllUsers query");
  const query = `
  SELECT * FROM app_user
  WHERE household = $1`;
  const value = [householdName];
  try {
    const response = await db.query(query, value);
    console.log(response);
    const allTheUsers = response.rows;
    delete rows.password;
    return allTheUsers;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addUser,
  getUser,
  addChore,
  getAllUsers,
};
