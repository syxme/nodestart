var ld = require('lodash');
exports.auth = {
	method	:"post",
	name	:"auth",
	route	:['all'],
	execute	:function(req, res, next) {
		if (req.session.user){
			models.User.findOne({login:req.session.user.login}, function(err, user) {
				if (err) {
					next(err);
				}else{
					if (user){
						user = ld.omit(user.toObject(),['__v','password','login']);
						res.response = user;
						next();
					}
				}
			});
		}else{
			res.statusCode = 401;
			next("Non user");
		}
		
	}
}