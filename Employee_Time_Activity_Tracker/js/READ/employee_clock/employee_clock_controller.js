var empModel = require('./employee_clock_model.js');
module.exports = {
	fetchData:function(req, res){
		empModel.fetchData(function(employee){

			res.render('clock_in_out.ejs', {
				empData : employee
			
			});
		})

	}
	
}