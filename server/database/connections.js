const { Pool } = require('pg');
require('dotenv').config();


const PG_URI = process.env.PG_URI;


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
// pool.query(`INSERT INTO "app_user" VALUES (goat@gmail.com, goat, goat2, 44, true, 40, wash car)`, (err,res) => {
//     if (err) console.log(`Error : ${err}, message: ${err.message}`);
//     console.log('done!');
// })
