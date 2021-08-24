var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');



// Employee CRUD routers
var employeeReadRouter = require('./js/READ/employee_router.js');
var employeeUpdateRouter = require('./js/UPDATE/employee_update_router.js');
var employeeDeleteRouter = require('./js/DELETE/employee_delete_router.js');
var employeeCreateRouter = require('./js/CREATE/employee_create/employee_create_router.js');
var readRouterActivity = require('./js/READ/employee_activity/employee_activity_router.js');


// Activity CRUD routers
var activityCreateRouter = require('./js/CREATE/activity_create/activity_create_router.js');
var activityReadRouter = require('./js/READ/activity_read/activity_read_router.js');
var activityUpdateRouter = require('./js/UPDATE/activity_update/activity_update_router.js');
var activityDeleteRouter = require('./js/DELETE/activity_delete/activity_delete_router.js');

// Clock In/Out Employee Entry routers
var clockCreateRouter = require('./js/CREATE/clock_create/clock_create_router.js');
var clockReadRouter = require('./js/READ/clock_read/clock_read_router.js');

app.use('/', employeeReadRouter);
app.use('/', employeeUpdateRouter);
app.use('/', employeeDeleteRouter);
app.use('/', employeeCreateRouter);
app.use('/', readRouterActivity);


app.use('/', activityCreateRouter);
app.use('/', activityReadRouter);
app.use('/', activityUpdateRouter);
app.use('/', activityDeleteRouter);

app.use('/', clockReadRouter);
app.use('/', clockCreateRouter);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());




app.get('/js/form_validation.js', function(req, res){
	res.sendFile(__dirname + '/js/form_validation.js');
});

app.get('/html/clock_in_out.html', function(req, res){
	res.sendFile(__dirname + '/html/clock_in_out.html');
});
app.get('/images/activity_background.jpeg', function(req, res){
	res.sendFile(__dirname + '/images/activity_background.jpeg');
});
app.get('/images/time_tracker_background.jpeg', function(req, res){
	res.sendFile(__dirname + '/images/time_tracker_background.jpeg');
});
app.get('/app.js', function(req, res){
	res.sendFile(__dirname + '/app.js');
});


app.listen(port, () =>{
	console.log("Server listening on port " + port);
});



