exports.login = {
	method	:"post",
	name	:"login",
	execute	:function(req, res) {
		var data = req.body;
		models.User.findOne({login:data.login}, function(err, user) {
			if (err) {
				res.json(err);
			}else{
				if (user){
					if (user.pass == data.pass){
						req.session.user = user;
						models.User.UpdateIp(req,user.login);
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
	execute	:function(req, res) {
		delete req.session.user;
		res.json({success:true});
	}
}	
