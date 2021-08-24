var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/employee_database', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}, function(err){
	if (err) console.log(err);
	console.log("database connected through database.js");
});

var connection = mongoose.connection;


connection.on('connected', function(){
	console.log('database is connected successfully');
});
connection.on('disconnected', function(){
	console.log('database is disconnected successfully');
});

connection.on('err', console.error.bind(console, 'connection error:'));



module.exports = connection;