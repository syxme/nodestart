exports.auth = {
	method	:"post",
	name	:"auth",
	execute	:function(req, res) {
		if (req.session.user){
			models.User.findOne({login:req.session.user.login}, function(err, user) {
				if (err) {
					res.json(err);
				}else{
					if (user){
						config.user = user;
						console.log(user);
						var user_tmp = {
							firstname:user.firstname	
						}
						res.json({success:true,req:user_tmp});
					}else{
						res.json({success:false});
					}
				}
			});
		}else{
			res.json({success:false,module:"auth.js"});
		}
	}
}