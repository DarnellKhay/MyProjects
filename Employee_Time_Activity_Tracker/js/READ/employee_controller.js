var empModel = require('./employee.js');
module.exports = {
	fetchData:function(req, res){
		empModel.fetchData(function(employee){

			res.render('employee-table', {
				title: 'Employee List',
				empData: employee
			});

	

		})
	}
}