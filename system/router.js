var fs = require('fs'),
	models	= require("./models"),
	async	= require("async")
	scanApi = require("./utils");

var admin 	= function(req,res){res.send("index-admin");}
var index	= function(req,res){res.send("index");}
var check	= function(req,res,next){
	if (req.session.user)
		next();
	else
		res.redirect('/login');
}

initializationRoute = function(app) {
	var folder,api;

	scanApi("api", function(err, file) { 
		Object.keys(file).forEach(function (num) {
			console.log("==============================FILE==============================".yellow);
			console.log("==->".green.bold+file[num]);
			folder	= file[num].replace(/(\w+)\/(\w+)\/(\w+).js/, "$2");
			api = require("../"+file[num]);
			Object.keys(api).forEach(function (i) {
				console.log ("======->".green+"method:"+api[i].method+" Name:"+api[i].name+" path:"+"/api/"+folder+'/'+api[i].name);		
				app[api[i].method]("/api/"+folder+'/'+api[i].name,api[i].execute);				
			});
		});
	});

	app.get('/admin/', admin);
	app.get('/admin/:option/', admin);
	app.get('/', index);
	app.get('/:page/', function(req, res,next){ 
		if (req.params.page!="api"){
			res.render("index");
		}else{
			next();
		}
	});

};

module.exports = initializationRoute;