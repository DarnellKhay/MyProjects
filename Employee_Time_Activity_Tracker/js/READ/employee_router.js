var express = require('express');
var router = express.Router();
var fetchController = require('./employee_controller.js');

router.get('/', fetchController.fetchData);

module.exports = router;