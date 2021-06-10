const db = require('./connections');

const addUser = async (userObj) => {
  console.log('addUser to DB query');
  
  const { username, household, password } = userObj;
  const query = `
  INSERT INTO app_user ("username", "household","password") 
  VALUES ($1, $2, $3)
  RETURNING *`
  const values = [username, household, password];
  
  try{
    const response = await db.query(query, values);
    const user = response.rows[0];
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
    console.log(response)
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
  SELECT username FROM app_user
  WHERE household = $1`
  const value = [householdName];
  try {
    const response = await db.query(query, value);
    console.log(response);
    const allTheUsers = response.rows;
    delete rows.password;
    return allTheUsers;
  } catch(err) {
    console.log(err);
  }
};

module.exports = {
  addUser,
  getUser,
  getAllUsers,
}