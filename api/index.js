//External Packages import
const express = require('express');

//Internal Files and module imports
const projectRoutes = require('./routes/projectRoutes');

//Assigining and middleware hooks
const app = express();

app.use('/api/v1/projects', projectRoutes);

//Exporting the module
module.exports = app;