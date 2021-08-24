var mongoose = require('mongoose');
var db = require('../../database.js');
var employeeSchema = require('../../employee_schema.js');

var employeeTable = mongoose.model('employee', employeeSchema, 'employee');


module.exports = {

	fetchData:function(callback){
		var empData = employeeTable.find({});
		empData.exec(function(err, employee){
			if(err) throw err;
			return callback(employee);
		})
	}
	
}

