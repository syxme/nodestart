var fs = require('fs'),
	models	= require("./models"),
	async	= require("async")
	scanApi = require("./utils");

initApi = function(app) {
	var folder,api;

	scanApi("api", function(err, file) { 
		Object.keys(file).forEach(function (num) {
			console.log("===============FILE===============".yellow);
			console.log("==->".green.bold+file[num]);
			folder	= file[num].replace(/(\w+)\/(\w+)\/(\w+).js/, "$2");
			api = require("../"+file[num]);  
			Object.keys(api).forEach(function (method) {
				console.log ("======->".green+"Method:"+api[method][0]+" Param:"+api[method][1]+" path:"+"/api/"+folder+'/'+api[method][1]);
				app[api[method][0]]("/api/"+folder+'/'+api[method][1],api[method][2]);	
			});
		});
	});

	app.get('/admin/', function(req, res){
		console.log("admin!")
		async.parallel({
			funcA:function(cb){
				cb(null,"funcArg5h");
			},
			funcb:function(cb){
				cb(null,"222222");
			}
		},function(err, results){
			console.log(results);
		});
		res.render("index-admin");
	});
	app.get('/admin/:option/', function(req, res){res.render("index-admin");});
	app.get('/', function(req, res){res.render("index");});
	app.get('/:option/', function(req, res,next){ 
		if (req.params.option!="api"){
			res.render("index");
		}else{
			next();
		}
	});

};

module.exports = initApi;