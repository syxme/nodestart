exports.create = {
	method	:"post",
	name	:"createtype",
	route	:['user'],
	execute	:function(req, res, next) {
		var data = req.body;
		models.AuctionType.create(data,function(err,c){
			if (!err){	
				res.response = c;
				next();
			}else{	
				next("error create AuctionType");
			}
		});
	
	}
}
exports.getType = {
	method	:"post",
	name	:"gettype",
	route	:['user'],
	execute	:function(req, res, next) {
		var data = req.body;
		models.AuctionType.find({},function(err,c){
			if (!err){	
				res.response = c;
				next();
			}else{	
				next("error find AuctionType");
			}
		});
	
	}
}