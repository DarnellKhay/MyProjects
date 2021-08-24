var mongoose = require('mongoose');
var db = require('../database.js');
var employeeSchema = require('../employee_schema.js');


var employeeTable = mongoose.model('employee', employeeSchema, 'employee');

module.exports = {
	editData:function(editId,callback){
		var empData = employeeTable.findById(editId);
		empData.exec(function(err, employee){
			if(err) throw err;
			return callback(employee);
		})
	},
	updateData:function(inputData, editId, callback){
		empData = employeeTable.findByIdAndUpdate(editId, inputData);
		empData.exec(function(err,employee){
			if(err) throw err;
			return callback(employee);
		})
	}
}