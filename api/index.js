//External Packages import
const express = require('express');
const path = require('path');

//Internal Files and module imports
const projectRoutes = require('./routes/projectRoutes');
const globalErrorHandler = require(path.join(__dirname,'./controllers/errorController.js'));
const appError = require(path.join(__dirname, './utils/appError.js'));

//Assigining and middleware hooks
const app = express();

app.use('/api/v1/projects', projectRoutes);

app.all('*', (req, res, next) => {
  next(new appError(`${req.originalUrl} was not found on the server. Please check the Url :D`));
});

app.use(globalErrorHandler);

//Exporting the module
module.exports = app;