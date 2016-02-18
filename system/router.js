var fs = require('fs'),
	models	= require("./models"),
	scanApi = require("./utils"),
	compile = new require("./compileModules"),
	engine = {};

const api = "/api/";
initApi = function(app) {
	compile.ex(function(e){
		module.exports = Engine = e;
		module.exports = modules = e.context;
		module.exports = models = e.models;

		Object.keys(e.controllers).forEach(function (i) {
			app.get(e.controllers[i].path, e.controllers[i].execute);
		});
		
		Object.keys(models).forEach(function (md) {
		 	Object.keys(models[md].access.admin).forEach(function (post) {
		 		app.post(api+md+'/'+models[md].access.admin[post],models[md][models[md].access.admin[post]]);
		 	});
		});
	});
};

module.exports = initApi;