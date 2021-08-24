var express = require('express');
var router = express.Router();
var fetchController = require('./clock_read_controller.js');


router.get('/clock_in_out.ejs', fetchController.fetchData);


module.exports = router;