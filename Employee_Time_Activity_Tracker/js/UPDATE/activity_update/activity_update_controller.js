var updateModel = require('./activity_update_model.js');

module.exports ={
	editData:function(req, res){
		var editId = req.params.id;
		updateModel.editData(editId, function(activity){
			res.render('update_activity.ejs', {actData: activity});
		})
	},
	updateData:function(req, res){

		var inputData = {
			$set: {
			client: req.body.update_activity_client,
			project: req.body.update_activity_project,
			activity: req.body.update_activity_activity,
			length: req.body.update_activity_length,
			location: req.body.update_activity_location,
			date: req.body.update_activity_date, 
			desc: req.body.update_activity_desc
		}
		}
		var editId = req.params.id;
		updateModel.updateData(inputData, editId, function(activity){
			res.redirect('/activity-table.ejs');
			console.log(activity._id + " record was updated");
		})
	}
}