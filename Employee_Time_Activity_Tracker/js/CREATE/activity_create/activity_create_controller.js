var mongoose = require('mongoose');
var createModel = require('./activity_create.js');
var employeeSchema = require('../../employee_schema.js');
var employeeTable = mongoose.model('employee', employeeSchema, 'employee');
var moment = require('moment');


module.exports = {
	userForm:function(req, res){
		res.render('activity.ejs');
	},
	createData:function(req,res){
	

	var id = req.body.employees;
	var client = req.body.client;
	var project = req.body.project;
	var activity = req.body.activity;
	var length = req.body.length;
	var location = req.body.location;
	var date = moment(req.body.workdate).format('YYYY-MM-DD');
	var desc = req.body.description;
	
	var inputData = {
		"employee_id": id,
		"client" : client,
		"project" : project,
		"activity" : activity,
		"length" : length,
		"location" : location,
		"date" : date,
		"desc" : desc
	}

	
	

		createModel.createData(inputData, function(activity){
			console.log('Activity has been added into system');
		}, function(employee){
			res.render('activity.ejs', {
				empData : employee
			})
		});
	}
}