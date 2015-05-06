var ld = require('lodash');
exports.auth = {
	method	:"post",
	name	:"auth",
	route	:['all'],
	execute	:function(req, res, next) {
		if (req.session.user){
			models.User.getUser(req,function(err,c){
				if (!err){	
					res.response = c;
					next();
				}else{	
					next("error user");
				}
			});
		}else{
			res.statusCode = 401;
			next("Non user");
		}
		
	}
}