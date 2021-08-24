var express = require('express');
var router = express.Router();
var fetchController = require('./employee_activity_controller.js');

router.get('/activity.ejs', fetchController.fetchData);

module.exports = router;