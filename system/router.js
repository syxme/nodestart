var fs = require('fs'),
	models	= require("./models"),
	async	= require("async")
	scanApi = require("./utils");
	var engine = {};
	var compile = new require("./compileModules");
	
initApi = function(app) {
	compile.ex(function(e){
		module.exports = Engine = e;		
		context.index.render("s",function(s,q){
		});
		Object.keys(e.controllers).forEach(function (i) {
			console.log(e.controllers[i].path);
			app.get(e.controllers[i].path, e.controllers[i].execute);
		});
	});
};

module.exports = initApi;