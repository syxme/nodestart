exports.addcar = {
	method	:"post",
	name	:"addcar",
	route	:['all'],
	execute	:function(req, res) {
	var data = req.body.data;
	var user = req.session.user._id;
	data.user = user;
		models.Car.create(data, function(err, resp) {
			if (!user){
				res.json({success:true});
			}else{
				res.json({success:false});
			}
		});
	}
}
