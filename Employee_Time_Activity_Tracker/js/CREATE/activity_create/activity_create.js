var mongoose = require('mongoose');
var db = require('../../database.js');
var activitySchema = require('../../activity_schema.js');
var actTable = mongoose.model('activities', activitySchema, 'activities');
var employeeSchema = require('../../employee_schema.js');
var employeeTable = mongoose.model('employee', employeeSchema, 'employee');

module.exports = {
	createData:function(inputData, callback, callback2){
		var actData = new actTable(inputData);
		actData.save(function(err, activity){
			if(err) throw err;
			return callback(activity);
		})
		var empData = employeeTable.find({});
		empData.exec(function(err, employee){
			if(err) throw err;
			return callback2(employee);
		})

	}

}