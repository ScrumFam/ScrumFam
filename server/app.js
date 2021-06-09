const express = require('express');
const app = express();
const path = require("path");
require('dotenv').config();
// console.log(process.env.TEST_ENV);
// This port will be used for express and the socket io connection
const { choreRouter, userRouter } = require('./routes/router')

module.exports = function(database) {

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  //Serving up the styles sheet
  app.use('/assets', express.static(path.join(__dirname, './../assets')));
  
  app.post('/users', async (req, res) => {
    const { username, password } = req.body
    
    const userId = await database.createUser(username, password);
    
    if (!password || !username) return res.sendStatus(400);
    
    res.json({ userId })
  });
  
  /* FOR PRODUCTION ONLY
  if (process.env.NODE_ENV === 'production') {
    // statically serve everything in the build folder on the route '/build'
    app.use('/build', express.static(path.join(__dirname, './../build')));
    // serve index.html on the route '/'
    app.get('/', (req, res) => {
      return res.status(200).sendFile(path.join(__dirname, './../index.html'));
    });
  }
  */
  
  app.use('/chore', choreRouter);
  app.use('/user', userRouter);
  
  // Globally serve index.html for all routes 
  app.get('*', (req, res) => {
    console.log(`*** serving root of landing page ${req.baseURL}`);
    res.sendFile(path.resolve(__dirname + './../index.html'))
  })
  
  // Global 404 handler
  app.use('*', (req, res) => {
    return res.status(404).send('********** GLOBAL BAD REQUEST / 404 ERROR **********');
  });
  
  // Global Middleware Error Handler
  app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

 return app
}