var mongoose = require('mongoose');
var db = require('../../database.js');
var actSchema = require('../../activity_schema.js');


var actTable = mongoose.model('activities', actSchema, 'activities');

module.exports = {
	editData:function(editId,callback){
		var actData = actTable.findById(editId);
		actData.exec(function(err, activity){
			if(err) throw err;
			return callback(activity);
		})
	},
	updateData:function(inputData, editId, callback){
		actData = actTable.findByIdAndUpdate(editId, inputData);
		actData.exec(function(err,activity){
			if(err) throw err;
			return callback(activity);
		})
	}
}