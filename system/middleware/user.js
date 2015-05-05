module.exports = function (req,res,next){
	console.log("---------------------TRACER-----------------------");
	var path = req.route.path;
	console.log("open:".red.bold+path);
	console.log("-->body:".green.bold,req.body);
	if (~config.protect[path].indexOf("all")){
		next();
	}else if (~config.protect[path].indexOf("user")&&req.session.user){
		next()
	}else{
		res.statusCode = 401;
		console.log("Error:401");
		next("401");	

	}	
}