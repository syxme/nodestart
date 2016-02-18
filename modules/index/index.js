var async = require("async");
var index = function(){
   var ctx = {};
}

index.prototype.local = function(req,cb){
 	cb(null,{});
}

index.prototype.admin = function(req,cb){
	var segments = req.segments;
	var ctx = {
		title:"Admin Panel",
		admin:true,
		authenticated:false
	};

	cb(null,ctx);
}

index.prototype.render = function(req,callback){
	ctx = {
		title:"TUTLE",
		text:"HEADER"
	}

	var segments = req.segments.segments;
	if (segments[0]=="admin"){
	console.log(segments);

		this.admin(req,function(err,context){
			console.log(context);
			callback(null,context);
		});
	}else{
		this.local(req,function(err,context){
			callback(null,context);
		});
	}

	//callback(null,ctx);
}

module.exports  = {index:new index};