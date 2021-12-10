//External module imports
const express = require('express');

//Internal modules and file imports
const projectController = require('../controllers/projectsController.js');

//Assignment and route handling
const route = express.Router();

route.route('/').get(projectController.getAllProjects);

//Exporting the routes
module.exports = route;