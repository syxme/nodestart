exports.login = ["post","login", function(req, res) {
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
}];
exports.exit = ["get","exit", function(req, res) {
	delete req.session.user;
	res.json({success:true});
}];
exports.done = ["get","done", function(req, res) {
	console.log("done");
	res.json({success:"dooooone"});
}];