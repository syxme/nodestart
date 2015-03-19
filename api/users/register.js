exports.post = ["register", function(req, res) {
	var data = req.body;
	models.User.findOne({login:data.login}, function(err, user) {
		if (!user){
			models.User.create(data, function(err, req) {
				if (err) {
					res.json(err);
				}else{
					res.json({success:true,req:req});
				}
	    	});
	   }else{
	   	 res.json({success:false});
	   }
	});
}];
