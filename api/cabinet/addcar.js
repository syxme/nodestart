exports.addcar = {
	method	:"post",
	name	:"addcar",
	route	:['all'],
	execute	:function(req, res, next) {
		var data = req.body;
		var user = req.session.user._id;
		data.user = user;
		models.Car.create(data, function(err, resp) {
			if (user){
				res.response = resp
				next();
			}else{
				next("error");
			}
		});
	}
}
