var ld = require('lodash');
exports.login = {
	method	:"post",
	name	:"login",
	route	:['all'],
	execute	:function(req, res, next) {
		var data = req.body;
		models.User.findOne({login:data.login}, function(err, user) {
			if (err) {
				res.json(err);
			}else{
				if (user){
					if (user.pass == data.pass){
						req.session.user = user;
						models.User.getUser(req,function(err,e){
							res.response = e;
							next();		
						});						
					}else{
						next("not valid");
					}
				}else{
					next("not valid");
				}
			}
	    });
	}
}
exports.exit = {
	method	:"get",
	name	:"exit",
	route	:['all'],	
	execute	:function(req, res, next) {
		delete req.session.user;
		next();	
	}
}	
