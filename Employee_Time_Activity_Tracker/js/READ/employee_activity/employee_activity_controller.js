var empModel = require('./employee_activity_model.js');
module.exports = {
	fetchData:function(req, res){
		empModel.fetchData(function(employee){

			res.render('activity', {
				empData: employee
			});

		})
	}
}