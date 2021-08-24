var mongoose = require('mongoose');

var db = require('../../database.js');

var empSchema = require('../../employee_schema.js');

var empTable = mongoose.model('employee', empSchema, 'employee');

module.exports = {

	createData:function(inputData, callback){
		var empData = new empTable(inputData);
		empData.save(function(err, employee){
			if(err) throw err;
			return callback(employee);
		})
	}

}