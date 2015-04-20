var helper = require("./utils");
var Handlebars = new require("handlebars");
var fs = require('fs')
var tmp,context = {},models = {},controllers = {};
module.exports.ex = function(cb){
	var tpl = {};
	helper.walk("modules", function(err, file) {
		Object.keys(file).forEach(function (num) {
			tmp = require("../"+file[num]);
			if (helper.frs(helper.fn(file[num]))=="hbs"){
			  tpl["gidro"]= Handlebars.compile(fs.readFileSync(file[num], 'utf8'));	
			  //tpl["content"]= Handlebars.compile(fs.readFileSync(file[num], 'utf8'));	
			  console.log("dsf",Handlebars.templates);
			  Handlebars.registerPartial("content","fs.readFileSync(file[num], 'utf8')");	
			  //console.log (Handlebars);

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
			context:context,
			controllers:controllers,
			tpl:tpl
		}
		cb(engine);	
	});
}