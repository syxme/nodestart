exports.index = ["get","", function(req, res) {
	if (req.session.user.login){
		models.User.find({}, function(err, user) {
			if (err) {
				res.json(err);
			}else{
				if (user){
					res.json(user);
				}else{
					res.json({success:false});
				}
			}
		});
	}else{
		res.json({success:false,err:"Police"});
	}
}];