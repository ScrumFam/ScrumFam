// const express = require('express');
const database = require('./database/database');
const makeApp = require('./app.js');
require('dotenv').config();

const app = makeApp(database);

const port = process.env.SERVER_PORT ;

const server = app.listen(process.env.PORT || port, () => {
  console.log(`Serving up chores on port ${port} 🙃`);
});