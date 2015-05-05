var ld = require('lodash');
exports.auth = {
	method	:"post",
	name	:"auth",
	route	:['all'],
	execute	:function(req, res) {
		if (req.session.user){
			models.User.findOne({login:req.session.user.login}, function(err, user) {
				if (err) {
					res.json(err);
				}else{
					if (user){
						user = ld.omit(user.toObject(),['__v','password','login']);
						res.json({success:true,req:user});
					}else{
						res.json({success:false});
					}
				}
			});
		}else{
			res.json({success:false});
		}
	}
}