var clockModel = require('./clock_read_model.js');
var mongoose = require('mongoose');
var employeeSchema = require('../../employee_schema.js');
var employeeClockTable = mongoose.model('employee', employeeSchema, 'employee');
module.exports = {

	fetchData:function(req, res){
		function getAllEmployees(callback){
			var empData = employeeClockTable.find({}, function(err, employees){
				if(err) callback(err, null);
				callback(null, employees);
			});

		}
		getAllEmployees(function(err, employees){
			clockModel.fetchData(function(entries){
			res.render('clock_in_out.ejs', {
				empData  : employees, 
				tableData : entries
				
			});
		})



		})
		
	}
	
}