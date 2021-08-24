var actModel = require('./activity_read_model.js');
module.exports = {
	fetchData:function(req, res){
		actModel.fetchData(function(activity){

			res.render('activity-table', {
				title: 'Activities List',
				actData: activity
			});

	

		})
	}
}