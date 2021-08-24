var express = require('express');
var router = express.Router();
var createController = require('./employee_create_controller.js');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


router.use(express.json());
router.use(express.urlencoded({ extended: false}));
router.use(cookieParser());


router.get('/add_employee.ejs', createController.userForm);
router.post('/add-employee', createController.createData);

module.exports = router;