var express = require('express');
var router = express.Router();
var fetchController = require('./activity_read_controller.js');

router.get('/activity-table.ejs', fetchController.fetchData);

module.exports = router;