exports.post = ["auth", function(req, res) {
	if (req.session.user_name){
		models.User.findOne({login:req.session.user_name}, function(err, user) {
			if (err) {
				res.json(err);
			}else{
				req.session.user_name = user.login;
				req.session.user_type = user.type;
				config.user_type = user.type;
				res.json({success:true,req:user});
			}
		});
	}else{
		res.json({success:false});
	}
}];