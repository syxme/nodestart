var ld = require('lodash');
exports.login = {
	method	:"post",
	name	:"login",
	route	:['all'],
	execute	:function(req, res) {
		var data = req.body;
		models.User.findOne({login:data.login}, function(err, user) {
			if (err) {
				res.json(err);
			}else{
				if (user){
					if (user.pass == data.pass){
						req.session.user = user;
						user = ld.omit(user.toObject(),['__v','password','login']);
						res.json({success:true,req:user});				
					}else{
						res.json({success:false});
					}
				}else{
					res.json({success:false});
				}
			}
	    });
	}
}
exports.exit = {
	method	:"get",
	name	:"exit",
	route	:['all'],	
	execute	:function(req, res) {
		delete req.session.user;
		res.json({success:true});
	}
}	
