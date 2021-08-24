var express = require('express');
var router = express.Router();
var deleteController = require('./employee_delete_controller.js');

router.get('/delete/:id', deleteController.deleteData);

module.exports = router;