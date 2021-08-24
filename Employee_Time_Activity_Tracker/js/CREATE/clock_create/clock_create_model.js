var mongoose = require('mongoose');
var db = require('../../database.js');
var clockSchema = require('../../clock_schema.js');
var clockTable = mongoose.model('clock', clockSchema, 'clock');



var tempVar;

module.exports = {
	editData:function(editId, callback){
		var empData = clockTable.findById(editId);
		empData.exec(function(err,employee){
			if(err) throw err;
			return callback(employee);
		})
	},
	createData:function(inputData, callback, callback2){
		var clockData = new clockTable(inputData);
		clockData.save(function(err, entry){

			if(err) throw err;
			return callback(entry);


		})
	},
	createData2:function(inputData,editId, callback){
		clockData = clockTable.findByIdAndUpdate(editId, inputData);
		clockData.exec(function(err, entry){
			if(err) throw err;
			return callback(entry);
		})
		
	}


}