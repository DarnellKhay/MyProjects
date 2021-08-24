var deleteModel = require('./activity_delete_model.js');

module.exports={
	deleteData:function(req, res){

		var deleteId = req.params.id;
		deleteModel.deleteData(deleteId,function(activity){
			res.redirect('/activity-table.ejs');
			console.log(activity._id + " has been deleted");
		})
	}
}