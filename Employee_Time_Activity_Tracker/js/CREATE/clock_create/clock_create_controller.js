var mongoose = require('mongoose');
var createModel = require('./clock_create_model.js');
var employeeSchema = require('../../employee_schema.js');
var employeeTable = mongoose.model('employee', employeeSchema, 'employee');
var moment = require('moment');


var clockSchema = require('../../clock_schema.js'); 
var clockTable = mongoose.model('clock', clockSchema, 'clock');


module.exports = {
	editData:function(req, res){
		var editId = req.body.employees;
	


	
			createModel.editData(editId, function(employee){
			
			res.render('clock_in_out.ejs', {
				empData : employee
			
			});
		})


		

		

	},
	createData:function(req,res){



	if(req.body.startTimeButton){
	console.log("startButton was pressed");

	function checkUnfinishedWork(employee_id, callback){
		var query = {"employee_id" : employee_id, "end_time" : ""}
		clockTable.find(query, function(err, unfinishedEntry){
			if(err) callback(err, null);
		
			callback(null, unfinishedEntry);
		})
	}
	
	
	var id = req.body.employees;
	var start_time = moment();
	var end_time = "";
	var worked_hours = 0;




	checkUnfinishedWork(id, function(err, unfinishedEntry){
	
		if(unfinishedEntry.length) return;
		var inputData ={

		"employee_id" : id,
		"start_time" : start_time.format("MM/DD/YYYY HH:mm:ss"),
		"end_time" : "",
		"worked_hours" : worked_hours

	}

	createModel.createData(inputData, function(entry){
		console.log("Employee has entered time");
		res.redirect('/clock_in_out.ejs');

	})

	})
	

	
	}
	if(req.body.endTimeButton){
		console.log("endButton was pressed");
		var end_time = moment();
		var editId = req.body.employees;
		var query = {"employee_id" : editId, "end_time" : ""}
		function getTime(query, callback){
			clockTable.find(query, function(err, entry){
				if(err) callback(err, null);
			
				callback(null, entry);
			})
		}

		function addWorkedHoursTotal(inputData, query, callback){
			clockTable.findOneAndUpdate(query, inputData, function(err, update){
				if (err) callback(err, null);
				callback(null, update);
			})
		}

		function getWorkedHoursTotal(id, callback){
			employeeTable.findById(id, function(err, employee){
				if(err) callback(err, null);
				callback(null, employee.worked_hours);
			})

		}

		function updateWorkedHoursEmployee(id, inputData, callback){
			employeeTable.findByIdAndUpdate(id, inputData, function(err, updated){
				if(err) callback(err,null);
				callback(null, updated);
			})

		}
		getTime(query, function(err, time){
			if(!time.length) return;
			getWorkedHoursTotal(editId, function(err, worked_hours){

				var inputData = {
			$set:{
				"end_time" : end_time.format("HH:mm:ss"),
				"worked_hours" : (parseFloat(worked_hours) + parseFloat(moment.duration(moment(end_time, "MM/DD/YYYY HH:mm:ss").diff(moment(time[0].start_time, "MM/DD/YYYY HH:mm:ss"))).asHours().toFixed(2))).toFixed(2)
			}
			}

			var inputData2= {
				$set:{
					"end_time" : end_time.format("HH:mm:ss"),
					"worked_hours" : moment.duration(moment(end_time, "MM/DD/YYYY HH:mm:ss").diff(moment(time[0].start_time, "MM/DD/YYYY HH:mm:ss"))).asHours().toFixed(2)
				}
			}
			updateWorkedHoursEmployee(editId, inputData, function(err, updated){

				addWorkedHoursTotal(inputData2, query, function(err, updated){
				//createModel.createData2(inputData2, time[0]._id, function(entry){
				console.log(editId + ' has finished working');
				res.redirect('/clock_in_out.ejs');

					//})
				})

			})		
		})	
	})

}
	if(req.body.refreshButton){
	console.log("refreshButton was pressed");
	var id = req.body.employees;
	var q = {"end_time" : ""};
	var today = moment();
	function getEmpTime(query, callback){
			clockTable.find(query, function(err, entry){
				if(err) callback(err, null);
				callback(null, entry);
			})
		}

	 function getIdFromEntries(query, callback){
	 	clockTable.find(query, function(err, entry){
	 		if(err) callback(err, null);
	 		callback(null, entry);
	 	})

	 }


	function updateEmployeesStillWorking(query, inputData, callback){
		clockTable.updateOne(
			query, 
			inputData,
			function(err, result){
				if(err) callback(err,null);
				callback(null,result);

			}
			)
	}


	getEmpTime(q, function(err, entries){
	

		for(var i = 0; i < entries.length; i++){ // entries contain all entires that have "end_time" : ""

			var q2 = {"employee_id" : entries[i].employee_id, "start_time" : entries[i].start_time};
				
			getIdFromEntries(q2, function(err, entries_of_specific_employee){
			
				for(var j = 0; j < entries_of_specific_employee.length; j++){ // entires that contain all entries that have "end_time" : "" and a specific start time for a specific employee

					var inputData = {
						$set:{
							"worked_hours" : moment.duration(moment(today, "MM/DD/YYYY HH:mm:ss").diff(moment(entries_of_specific_employee[j].start_time, "MM/DD/YYYY HH:mm:ss"))).asHours().toFixed(2)
						}
					}

					updateEmployeesStillWorking(entries_of_specific_employee[j], inputData, function(err, result){
						console.log("Employee worked hours are up to date");
					})



				}
			})
			
	
	}
	res.redirect('/clock_in_out.ejs');
	})



	
	}
	}
}
