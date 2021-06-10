const express = require('express');
const app = express();
const path = require("path");
const cookieParser = require('cookie-parser');
require('dotenv').config();
// console.log(process.env.TEST_ENV);
// This port will be used for express and the socket io connection


module.exports = function(database) {

  const choreRouter = require('./routes/choreRouter')(database); 
  const userRouter = require('./routes/userRouter')(database);
  // const choreRouter = require('./routes/choreRouter')(database)

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  
  //Serving up the styles sheet
  app.use('/assets', express.static(path.join(__dirname, './../assets')));
  
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
  
  app.use('/chores', choreRouter);
  app.use('/users', userRouter);
  
  // Globally serve index.html for all routes 
  app.get('*', (req, res) => {
    console.log(req);
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