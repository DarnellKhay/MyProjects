var deleteModel = require('./employee_delete.js');

module.exports={
	deleteData:function(req, res){

		var deleteId = req.params.id;
		deleteModel.deleteData(deleteId,function(employee){
			res.redirect('/');
			console.log(employee._id + " has been deleted");
		})
	}
}