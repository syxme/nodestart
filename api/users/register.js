exports.update = {
	method	:"post",
	name	:"register",
	route	:['all'],
	execute	:function(req, res,next) {
	var data = req.body;
		models.User.findOne({login:data.login}, function(err, user) {
			if (!user){
				models.User.create(data, function(err, req) {
					if (err) {
						next(err);
					}else{
						res.response = req;
						next();
					}
				});
			}else{
				return next("clone login");
			}
		});
	}
}
