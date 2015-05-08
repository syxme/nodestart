var	models	= require("./models"),
	async	= require("async"),
	scanApi = require("./utils"),
	mdres	= require("./middleware/response"),
	user	= require("./middleware/user"),
	error	= require("./middleware/error"),
	index	= require("./middleware/index");

initApi = function(app) {
	var folder,api;
	
	scanApi.walk("api", function(err, file) {
		Object.keys(file).forEach(function (num) {
			console.log("==============================FILE==============================".yellow);
			console.log("==->".green.bold+file[num]);
			folder	= file[num].replace(/(\w+)\/(\w+)\/(\w+).js/, "$2");
			api = require("../"+file[num]);
			Object.keys(api).forEach(function (i) {
				var path = "/api/"+folder+'/'+api[i].name;
				config.protect[path] = api[i].route;
				console.log ("======->".green+"method:"+api[i].method+" params:"+api[i].name+" path:"+path);		
				app[api[i].method]("/api/"+folder+'/'+api[i].name,[user,api[i].execute,error,mdres]);	
			
			});
		});
	});

	app.get('/', index);
	app.get('/:option/', index);
	app.get('/:option/:optionA/',index);
	app.get('/:option/:optionA/:optionB/',index);

};

module.exports = initApi;