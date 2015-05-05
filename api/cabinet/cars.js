exports.addcar = {
	method	:"post",
	name	:"addcar",
	route	:['user'],
	execute	:function(req, res) {
		var data = req.body;
		var user = req.session.user._id;
		data.user = user;
			models.Car.create(data, function(err, resp) {
				if (resp){
					res.json({success:true});
				}else{
					res.json({success:false});
				}
			});
	}
}
exports.cars = {
	method	:"post",
	name	:"cars",
	route	:['user'],
	execute	:function(req, res) {
		var user = req.session.user._id;
			models.Car.find({user:user}).populate('user').exec(function(err, resp) {
				if (resp){
					res.json(resp);
				}else{
					res.json({success:false});
				}
			});
	}
}
exports.rmcar = {
	method	:"post",
	name	:"rmcar",
	route	:['user'],
	execute	:function(req, res) {
		var user = req.session.user._id;
		var data = req.body;
			models.Car.remove(data,function(err, resp) {
				if (resp){
					res.json(resp);
				}else{
					res.json({success:false});
				}
			});
	}
}