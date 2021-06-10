const db = require("./connections");



const camelToSnake = (str) =>
  str
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();

const buildQueryComponents = (obj, validProps) => {
  const props = Object.keys(obj);
  const first = props.pop();
  const values = [obj[first]];
  let fields = `${first}`;
  let vals = "$1";
  let i = 1;
  props.forEach((prop) => {
    prop = camelToSnake(prop);
    if (validProps[prop]) {
      i += 1;
      fields += `, ${prop}`;
      vals += `, $${i}`;
      values.push(obj[prop]);
    }
  });
  return { values, fields, vals };
};

const startSession = async (ssid) => {
  console.log("starting Session");
  try {
    const query = `
    INSERT INTO "session" (ssid, created_at, valid_until) 
    VALUES ($1, $2, $3) 
    `;
    const currentTime = new Date();
    const expireTime = new Date(currentTime.getTime() + 1200000);
    const values = [ssid, currentTime, expireTime];

    console.log(values);

    await db.query(query, values);

    console.log("session created: ", ssid);
    return;
  } catch (err) {
    // return new Error(err)
    console.log(err);
  }
};

const retrieveSession = async (ssid) => {
  try {
    const query = `
    SELECT * FROM "session" WHERE "ssid" = $1
    `;
    const values = [ssid];

    const response = await db.query(query, values);
    return response.rows[0];
  } catch (err) {
    console.log(err);
  }
};

const clearSession = async (ssid) => {
  try {
    const query = `
    DELETE FROM "session" WHERE "ssid" = $1
    `;
    const values = [ssid];

    const response = await db.query(query, values);
    console.log(`session deleted: ${ssid}`);
    return;
  } catch (err) {
    console.log(err);
  }
};

const refreshSession = async (ssid) => {
  try {
    const query = `
    UPDATE "session" 
    SET valid_until = $2
    WHERE "ssid" = $1;
    `;

    //create a timestamp 20 minutes from now.
    const currentMillis = new Date().getTime();
    const timestamp = new Date(currentMillis + 1200000);

    const values = [ssid, timestamp];

    const response = await db.query(query, values);
    console.log(`session refreshed: ${ssid}`);
    return;
  } catch (err) {
    console.log(err);
  }
};

const isParent = async (userId) => {
  
  const query = `
    SELECT "is_parent" FROM "app_user"
    WHERE id = $1;
  `
  const values = [userId];

  const response = await db.query(query, values);

  console.log(reponse);

  return response.rows[0].is_parent;
}


const addUser = async (userObj) => {
  try {
    const validProps = {
      email: true,
      username: true,
      password: true,
      household: true,
      is_parent: true,
      balance: true,
      active_goal: true,
      created_at: true,
    };
    const { values, fields, vals } = buildQueryComponents(userObj, validProps);

    const query = `
    INSERT INTO app_user (${fields})
    VALUES (${vals})
    RETURNING *`;
    const response = await db.query(query, values);
    const user = response.rows[0];
    delete user.password;
    return user;
  } catch (err) {
    console.log(err);
  }
};

const getUserPassword = async (username, household) => {
  const query = `
    SELECT "password" FROM app_user
    WHERE username = $1 AND household = $2;
  `;
  const values = [username, household];
  const response = await db.query(query, values);
  return response.rows[0].password;
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
  SELECT email, username, household, is_parent, balance FROM app_user
  WHERE household = $1`;
  const value = [householdName];
  try {
    const response = await db.query(query, value);
    console.log(response);
    const allTheUsers = response.rows;
    //delete rows.password;
    return allTheUsers;
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (userId) => {
  console.log("made it to the deleteuser query");
  const query = `
  DELETE FROM app_user`;
  const value = [userId];
  try {
    const response = await db.query(query, value);
  } catch (err) {
    console.log(err);
  }
};
// how do you incorporate a password stored in a variable to the sql table
// or how would you incorporate many items to the tabl to change at the same time
// fix updateUser and updateBalance
const updateUser = async (userId, pass) => {
  console.log("made it to the updateuser query");
  const query = `
  UPDATE app_user
  SET password = $2
  WHERE id = $1`;
  const value = [userId, pass];
  try {
    const response = await db.query(query, value);
  } catch (err) {
    console.log(err);
  }
};

const updateBalance = async (userId, bal) => {
  console.log("made it to the updateuser query");
  const query = `
  UPDATE app_user
  SET balance = $2
  WHERE id = $1`;
  const value = [userId, bal];
  try {
    const response = await db.query(query, value);
  } catch (err) {
    console.log(err);
  }
};

const getAllChores = async (householdName) => {
  console.log("made it to the getAllChores query");
  const query = `
  SELECT * FROM chore
  WHERE household = $1`;
  const value = [householdName];
  try {
    const response = await db.query(query, value);
    console.log(response);
    const allTheChores = response.rows;
    return allTheChores;
  } catch (err) {
    console.log(err);
  }
};

const deleteChore = async (choreId) => {
  console.log("made it to the deletechore query");
  const query = `
  DELETE FROM chore
  WHERE id = $1`;
  const value = [choreId];
  try {
    const response = await db.query(query, value);
  } catch (err) {
    console.log(err);
  }
};

const getSpecificUsersChores = async (userId) => {
  console.log("made it to the getSpecificUsersChores query");
  const query = `
  SELECT * FROM chore
  WHERE assigned_to = $1`;
  const value = [userId];
  try {
    const response = await db.query(query, value);
    const certainUsersChores = response.rows;
    console.log(certainUsersChores);
    return certainUsersChores;
  } catch (err) {
    console.log(err);
  }
};

const choreComplete = async (choreId) => {
  console.log("made it to the choreComplete query");
  const query = `
  UPDATE chore
  SET completed_on = CURRENT_TIMESTAMP
  WHERE id = $1`;
  const value = [choreId];
  try {
    const response = await db.query(query, value);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const createHousehold = async (houseName) => {
  
  try{
    const query = `
    INSERT INTO household ("name")
    VALUES ($1)
    RETURNING *`;
  
    const response = await db.query(query, [houseName]);
    console.log(response);
  
    const household = response.rows[0];
  
    return household;
  }catch(err){
    console.log('ERROR:', err.message);
  }
}

const addChore = async ({
  created_by,
  assigned_to,
  description,
  created_at,
  reward,
}) => {
  console.log("addChore to DB query");
  const query = `
    INSERT INTO chore ("created_by" "assigned_to", description",
      "created_at",

      "reward")
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`;
  const values = [created_by, assigned_to, description, created_at, reward];
  try {
    const response = await db.query(query, values);
    const chore = response.rows[0];
    return chore;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addUser,
  createHousehold,
  getUser,
  addChore,
  getAllUsers,
  getUserPassword,
  startSession,
  retrieveSession,
  clearSession,
  refreshSession,
  deleteUser,
  updateUser,
  updateBalance,
  getAllChores,
  deleteChore,
  getSpecificUsersChores,
  choreComplete,
};
