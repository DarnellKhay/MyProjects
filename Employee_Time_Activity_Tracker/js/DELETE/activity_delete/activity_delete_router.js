var express = require('express');
var router = express.Router();
var deleteController = require('./activity_delete_controller.js');

router.get('/delete2/:id', deleteController.deleteData);

module.exports = router;