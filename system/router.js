var fs = require('fs'),
	models	= require("./models"),
	scanApi = require("./utils"),
	compile = new require("./compileModules"),
	engine = {};
	
initApi = function(app) {
	compile.ex(function(e){
		module.exports = Engine = e;

		Object.keys(e.controllers).forEach(function (i) {
			app.get(e.controllers[i].path, e.controllers[i].execute);
		});
	});
};

module.exports = initApi;