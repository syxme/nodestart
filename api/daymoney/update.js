exports.update = ["post","update", function(req, res) {
	var data = req.body.data;
	var id = req.session.user._id; 
	models.DayMon.update({_id:id},{_id:id,data:data},{upsert:true}, function(err, dmon) {
		if (!err) {
			res.json({success:true,response:dmon});
		}else{
			res.json({success:false,response:err});
		}

	});
}];
exports.get = ["post","get", function(req, res) {
	var id = req.session.user._id;
	models.DayMon.findOne({_id:id}, function(err, r) {
		if (!err) {
			res.json({success:true,response:r});
		}else{
			res.json({success:false,response:err});
		}

	});
}];
exports.payout = ["post","payout", function(req, res) {
	var id = req.session.user._id;
	var data = req.body.data;

	models.DayMon.update({_id:id},{"$push":{"payout":data}}, function(err, r) {
		if (!err) {
			res.json({success:true,response:r});
		}else{
			res.json({success:false,response:err});
		}

	});
}];
exports.rmtr = ["post","rmtr", function(req, res) {
	var id = req.session.user._id;
	var id_rm = req.body.id;

	models.DayMon.update({_id:id},{"$pull":{"payout":{"_id":id_rm}}}, function(err, r) {
		if (!err) {
			res.json({success:true,response:r});
		}else{
			res.json({success:false,response:err});
		}

	});
}];