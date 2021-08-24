var createModel = require('./employee_create.js');


function getRandomId(){
	return Math.floor((Math.random() * 100000000) + 10000000);
}



module.exports = {
	userForm:function(req,res){
		res.render('add_employee.ejs');
	},
	createData:function(req,res){
		
	var first_name = req.body.employee_firstname;
	var last_name = req.body.employee_lastname;
	var position = req.body.employee_position;


	var inputData = {
		"employee_id": getRandomId(),
		"first_name" : first_name,
		"last_name" : last_name,
		"position" : position,
		"start_time": "",
		"end_time": "",
		"worked_hours": 0
	}

		createModel.createData(inputData, function(employee){
			res.render('add_employee.ejs');
			console.log('Employee has been added into system');
		});
	}
}