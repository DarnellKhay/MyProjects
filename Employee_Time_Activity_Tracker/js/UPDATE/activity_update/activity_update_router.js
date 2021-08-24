var express = require('express');
var router = express.Router();
var updateController = require('./activity_update_controller.js');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


router.use(express.json());
router.use(express.urlencoded({ extended: false}));
router.use(cookieParser());


router.get('/edit2/:id', updateController.editData);
router.post('/edit2/:id', updateController.updateData);

module.exports = router;