var updateModel = require('./employee_update.js');

module.exports ={
	editData:function(req, res){
		var editId = req.params.id;
		updateModel.editData(editId, function(employee){
			res.render('update_employee.ejs', {empData: employee});
		})
	},
	updateData:function(req, res){

		var inputData = {
			$set: {
			first_name: req.body.update_employee_firstname,
			last_name: req.body.update_employee_lastname,
			position: req.body.update_employee_position
		}
		}
		var editId = req.params.id;
		
		updateModel.updateData(inputData, editId, function(employee){
			res.redirect('/');
			console.log(employee._id + " record was updated");
		})
	}
}