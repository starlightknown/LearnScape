//External module imports
const express = require('express');

//Internal modules and file imports
const projectController = require('../controllers/projectsController.js');

//Assignment and route handling
const route = express.Router();
route.use(express.json());

route.route('/').get(projectController.getAllProjects);

route.route('/:id').get(projectController.getSingleProject);

//Exporting the routes
module.exports = route;