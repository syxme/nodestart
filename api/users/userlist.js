exports.index = {
	method	:"get",
	name	:"",
	route	:['user'],
	execute	:function(req, res,next) {
		models.User.find({}, function(err, user) {
			if (err) {
				next(err);
			}else{
				if (user){
					res.response = user;
					next();
				}else{
					res.statusCode = 401;
					next("Non user");
				}
			}
		});
	}
}