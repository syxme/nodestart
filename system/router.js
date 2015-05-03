var fs = require('fs'),
	models	= require("./models"),
	async	= require("async")
	scanApi = require("./utils");

var checkUser = function (req,res,next){
    arguments.callee.exec(req,res);
	
}
initApi = function(app) {
	var folder,api;

	scanApi("api", function(err, file) { 
		Object.keys(file).forEach(function (num) {
			console.log("==============================FILE==============================".yellow);
			console.log("==->".green.bold+file[num]);
			folder	= file[num].replace(/(\w+)\/(\w+)\/(\w+).js/, "$2");
			api = require("../"+file[num]);
			Object.keys(api).forEach(function (i) {
				console.log ("======->".green+"method:"+api[i].method+" params:"+api[i].name+" path:"+"/api/"+folder+'/'+api[i].name);		
				app[api[i].method]("/api/"+folder+'/'+api[i].name,api[i].execute);	
			
			});
		});
	});

	app.get('/admin/', function(req, res){res.render("index-admin");});
	app.get('/admin/:option/', function(req, res){res.render("index-admin");});
	app.get('/', function(req, res){res.render("index");});
	app.get('/:option/', function(req, res,next){ 
		if (req.params.option!="api"){
			res.render("index");
		}else{
			next();
		}
	});
	app.get('/:option/:optionA/', function(req, res,next){ 
		if (req.params.option!="api"){
			res.render("index");
		}else{
			next();
		}
	});

};

module.exports = initApi;