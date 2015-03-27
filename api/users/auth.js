exports.autentech = ["post","auth", function(req, res) {
	if (req.session.user){
		models.User.findOne({login:req.session.user.login}, function(err, user) {
			if (err) {
				res.json(err);
			}else{
				if (user){
					config.user_type = user.type;
					models.User.UpdateIp(req,user.login);
					res.json({success:true,req:user});
				}else{
					res.json({success:false});
				}
			}
		});
	}else{
		res.json({success:false,module:"auth.js"});
	}
}];