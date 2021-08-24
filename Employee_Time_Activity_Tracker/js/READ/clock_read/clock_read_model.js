var mongoose = require('mongoose');
var db = require('../../database.js');
var moment = require('moment');

var employeeClockSchema = require('../../clock_schema.js');
var employeeClockTable = mongoose.model('clock', employeeClockSchema, 'clock');

module.exports = {
	fetchData:function(callback){
		var currentDay = moment();

		var empData = employeeClockTable.find({"start_time" : { $gte: currentDay.startOf('day').format("MM/DD/YYYY HH:mm:ss").toString(), $lt: currentDay.endOf('day').format("MM/DD/YYYY HH:mm:ss").toString()}});
	
		empData.exec(function(err, employee){
			if(err) throw err;
			return callback(employee);
		})

	}
	
}

