var mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
	employee_id: Number,
	first_name: String,
	last_name: String,
	position: String,
	start_time: String,
	end_time: String,
	worked_hours: Number
});

module.exports = employeeSchema;