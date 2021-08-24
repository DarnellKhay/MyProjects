var mongoose = require('mongoose');
var activitySchema = new mongoose.Schema({
	employee_id: Number,
	client: String,
	project: String,
	activity: String,
	length: String,
	location: String,
	date: String, 
	desc: String
});

module.exports = activitySchema;