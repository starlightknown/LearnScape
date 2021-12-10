
const fs = require('fs');
const path = require('path');
const data = require(path.join(
  __dirname,
  '../dev-data/data/projects.json'
))

//Exporting the functions to be executed for specific route
exports.getAllProjects = (req, res, next) => {
	
	try {
		res.status(200).json({
			status: 'successs',
			result: data.length,
			data
		})
	} catch(err) {
		res.status(400).json({
			status: 'Error',
			message: 'Something went wrong please try again later',
			error: {
				err
			}
		});
	}
};