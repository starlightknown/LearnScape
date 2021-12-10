const Project = require('../models/projectModel.js');
const ApiFeatures = require('../utils/apiFeatures.js');
const catchAsync = require('../utils/catchAsync');

//Exporting the functions to be executed for specific route
exports.getAllProjects = catchAsync(async (req, res, next) => {

	const feature = new ApiFeatures(Project.find(), req.query).sort().limitFields().pagination();

	const projects = await feature.query;
	

	res.status(200).json({
		status: 'successs',
		result: projects.length,
		projects
	})
	
});

exports.getSingleProject = catchAsync (async (req, res, next) => {
	
	const project = await Project.findById(req.params.id);

	res.status(200).json({
		status: 'success',
		project
	});
	
});
