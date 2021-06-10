const db = require('./connections');

const addUser = async ({ username, household, hash }) => {
  console.log('addUser to DB query');
  const query = `
  INSERT INTO app_user ("username", "household", "password") 
  VALUES ($1, $2, $3)
  RETURNING *`
  const values = [username, household, hash];
  
  try{
    const response = await db.query(query, values);
    const user = response.rows[0];
    delete user.password;
    return user;
  }catch(err){
    console.log(err);
  }
};
  

const getUser = async (userId) => {
  console.log('made it to the getuser query'); 
  const query = `
  SELECT * FROM app_user  
  WHERE id = $1`
  const value = [userId];
  try {
    const response = await db.query(query, value);
    console.log(response);
    const certainUser = response.rows[0];
    delete certainUser.password;
    console.log('this is the rows object', certainUser);
    return certainUser;
  } catch(err) {
    console.log(err);
  }
};

const getAllUsers = async (householdName) => {
  console.log('made it to the getAllUsers query');
  const query = `
  SELECT email, username, household, is_parent, balance FROM app_user
  WHERE household = $1`
  const value = [householdName];
  try {
    const response = await db.query(query, value);
    console.log(response);
    const allTheUsers = response.rows;
    //delete rows.password;
    return allTheUsers;
  } catch(err) {
    console.log(err);
  }
};

const deleteUser = async (userId) => {
  console.log('made it to the deleteuser query');
  const query = `
  DELETE FROM app_user
  WHERE id = $1`
  const value = [userId];
  try {
    const response = await db.query(query, value);
  } catch(err) {
    console.log(err);
  }
};

// how do you incorporate a password stored in a variable to the sql table
// or how would you incorporate many items to the tabl to change at the same time
// fix updateUser and updateBalance
const updateUser = async (userId, pass) => {
  console.log('made it to the updateuser query');
  const query = `
  UPDATE app_user
  SET password = $2
  WHERE id = $1`
  const value = [userId, pass];
  try {
    const response = await db.query(query, value);
  } catch(err) {
    console.log(err);
  }
};

const updateBalance = async (userId, bal) => {
  console.log('made it to the updateuser query');
  const query = `
  UPDATE app_user
  SET balance = $2
  WHERE id = $1`
  const value = [userId, bal];
  try {
    const response = await db.query(query, value);
  } catch(err) {
    console.log(err);
  }
};

const getAllChores = async (householdName) => {
  console.log('made it to the getAllChores query');
  const query = `
  SELECT * FROM chore
  WHERE household = $1`
  const value = [householdName];
  try {
    const response = await db.query(query, value);
    console.log(response);
    const allTheChores = response.rows;    
    return allTheChores;
  } catch(err) {
    console.log(err);
  }
};

const deleteChore = async (choreId) => {
  console.log('made it to the deletechore query');
  const query = `
  DELETE FROM chore
  WHERE id = $1`
  const value = [choreId];
  try {
    const response = await db.query(query, value);
  } catch(err) {
    console.log(err);
  }
};

const getSpecificUsersChores = async (userId) => {
  console.log('made it to the getSpecificUsersChores query'); 
  const query = `
  SELECT * FROM chore
  WHERE assigned_to = $1`
  const value = [userId];
  try {
    const response = await db.query(query, value);  
    const certainUsersChores = response.rows;
    console.log(certainUsersChores)   
    return certainUsersChores;
  } catch(err) {
    console.log(err);
  }
};

const choreComplete = async (choreId) => {
  console.log('made it to the choreComplete query');
  const query = `
  UPDATE chore
  SET completed_on = CURRENT_TIMESTAMP
  WHERE id = $1`;
  const value = [choreId];
  try {
    const response = await db.query(query, value);
    return response;
  } catch(err) {
    console.log(err);
  }
}



module.exports = {
  addUser,
  getUser,
  getAllUsers,
  deleteUser,
  updateUser,
  updateBalance,
  getAllChores,
  deleteChore,
  getSpecificUsersChores,
  choreComplete
}