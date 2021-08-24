var mongoose = require('mongoose');
var clockSchema = new mongoose.Schema({
	employee_id: String,
	start_time: String,
	end_time: String,
	worked_hours: Number
});

module.exports = clockSchema;