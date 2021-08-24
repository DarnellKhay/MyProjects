var express = require('express');
var router = express.Router();
var createController = require('./clock_create_controller.js');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


router.use(express.json());
router.use(express.urlencoded({ extended: false}));
router.use(cookieParser());


router.get('/clock_in_out.ejs', createController.editData);
router.post('/enter-time', createController.createData);

module.exports = router;