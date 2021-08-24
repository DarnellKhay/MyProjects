var mongoose = require('mongoose');
var db = require('../database.js');

var employeeSchema = require('../employee_schema.js');


var employeeTable = mongoose.model('employee', employeeSchema, 'employee');

module.exports = {
	deleteData:function(deleteId, callback){

		empData = employeeTable.findByIdAndDelete(deleteId);
		empData.exec(function(err, employee){
			if(err) throw err;
			return callback(employee);
		})
	}
}