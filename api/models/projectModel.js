const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Project should have a name']
	},
	tags: {
		type: [String]
	},
	category: {
		type: [String]
	},
	socials: {
		website: {
			type: String
		},
		github: {
			type: String
		},
		twitter: {
			type: String
		},
	},
	programmingLanguages: {
		type: [String],
	},
	programsInvolvement: {
		type: [String],
	},
	createdAt: {
    type: Date,
    default: Date.now()
  }
},
{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
