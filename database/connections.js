const { Pool } = require('pg');


const PG_URI = process.env.URI;


const pool = new Pool({
  connectionString: PG_URI,
});

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })
//for future devs: schema (ish) for the above db will be found in 
// tables.js
pool.on('connect', () => {
  console.log('connected to database')
})

module.exports = {
  pool: pool,
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
pool.query(`INSERT INTO "app_user" VALUES (goat@gmail.com, goat, goat2, 44, true, 40, wash car)`, (err,res) => {
    if (err) console.log(`Error : ${err}, message: ${err.message}`);
    console.log('done!');
})

// const userTableString = 
//  CREATE TABLE app_user (    
//     uid  SERIAL UNIQUE PRIMARY KEY,
//     email VARCHAR(250) UNIQUE,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     password VARCHAR(50) NOT NULL,    
//     household VARCHAR(50),
//     is_parent BOOLEAN,
//     balance FLOAT,
//     active_goal INT 
//   )