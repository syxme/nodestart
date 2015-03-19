exports.post = ["login", function(req, res) {
	var data = req.body;
	 models.User.findOne({login:data.login}, function(err, user) {
		if (err) {
			res.json(err);
		}else{
			if (user){
				if (user.pass == data.pass){
					req.session.user_name = user.login;
					req.session.user_type = user.type;
					config.user_type = user.type;
					console.log(req.session);
					res.json({success:true,req:user});
					
				}else{
					res.json({success:false});
				}
			}else{
				res.json({success:false});
			}
		}
    });
}];
exports.put = ["exit", function(req, res) {
	delete req.session.user_name;
	res.json({success:true});
}];