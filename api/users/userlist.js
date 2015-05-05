exports.index = {
	method	:"get",
	name	:"",
	route	:['all'],
	execute	:function(req, res) {
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
	}
}