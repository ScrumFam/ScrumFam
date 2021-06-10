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
  

// const getUser = async (specificUser) => {
//   console.log('made it to the getuser query');
//   const { userID } = specificUser;
//   const query = `
//   SELECT FROM `
// }

module.exports = {
  addUser,
  // getUser,
}