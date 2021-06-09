const db = require('./connections');

const addUser = async (userObj) => {
  const { username, household, password } = userObj;
  const query = `
  INSERT INTO app_user ("username", "household","password") 
  VALUES ($1, $2, $3)
  RETURNING id AS userId`
  const values = [username, household, password];
  
  const userId = await db.query(query, values);

  return userId;
}

module.exports= {
  addUser,
}