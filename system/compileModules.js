var helper = require("./utils");
var Handlebars = new require("handlebars");
var fs = require('fs')
var tmp,context = {},models = {},controllers = {}, view = {};
module.exports.ex = function(cb){
	helper.walk("modules", function(err, file) {
		Object.keys(file).forEach(function (num) {
			tmp = require("../"+file[num]);
			if (helper.frs(helper.fn(file[num]))=="hbs"){
				Handlebars.registerPartial(helper.hbsName(file[num]),fs.readFileSync(file[num]));
				view[helper.hbsName(file[num])] = Handlebars.compile(fs.readFileSync(file[num], 'utf8'));					  
			}
			switch (helper.fn(file[num])){
				case config.compiler.scanOptions.index:
					context[Object.keys(tmp)] = tmp[Object.keys(tmp)];
					break;
				case config.compiler.scanOptions.model:
					models[Object.keys(tmp)] = tmp[Object.keys(tmp)];
					break;
				case config.compiler.scanOptions.controller:
					controllers[Object.keys(tmp)] = tmp[Object.keys(tmp)];
					break;
				default:
					break;
			}
		});
		var engine = {
			controllers	:controllers,
			context		:context,
			models		:models,
			view		:view
		}
		cb(engine);	
	});
}