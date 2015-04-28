var http = require('http');
exports.getcountry = {
	method	:"get",
	name	:"getcountry",
	execute	:function(req, res) {
		var data = '';
		http.get("http://api.vk.com/method/database.getCountries?v=5.5&need_all=1&count=1000", function(rews) {
		  rews.on('data', function (chunk) {
		  	data+=chunk;
		  });
		  rews.on('end', function (chunk) {
		  	   res.send(data);
		  });
 	  	});
	}
}
	