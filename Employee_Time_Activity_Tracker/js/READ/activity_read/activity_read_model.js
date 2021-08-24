var mongoose = require('mongoose');
var db = require('../../database.js');
var actSchema = require('../../activity_schema.js');

var actTable = mongoose.model('activities', actSchema, 'activities');


module.exports = {
	fetchData:function(callback){
		var actData = actTable.find({});
		actData.exec(function(err, activity){
			if(err) throw err;
			return callback(activity);
		})
	}
}

