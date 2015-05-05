var http = require('http');
var api = "http://api.vk.com/method/";
exports.getcountry = {
	method	:"post",
	name	:"getcountry",
	route	:['all'],
	execute	:function(req, res) {
		var data = '';
		http.get(api+"database.getCountries?v=5.5&need_all=1&count=1000", function(rews) {
		  rews.on('data', function (chunk) {
		  	data+=chunk;
		  });
		  rews.on('end', function (chunk) {
		  	   res.send(data);
		  });
 	  	});
	}
}
exports.getRegions = {
	method	:"post",
	name	:"getregions",
	route	:['all'],
	execute	:function(req, res) {
		var data = '';
		var country_id = req.body.country_id;
		var set = api+"database.getRegions?v=5.5&country_id="+country_id+"&count=100";
		http.get(set, function(rews) {
		  rews.on('data', function (chunk) {
		  	data+=chunk;
		  });
		  rews.on('end', function (chunk) {
		  	   res.send(data);
		  });
 	  	});
	}
}

exports.getCities = {
	method	:"post",
	name	:"getcities",
	route	:['all'],
	execute	:function(req, res) {
		var data = '';
		var country_id = req.body.country_id;
		var region_id = req.body.region_id;
		var query = req.body.query;
		if (!query)
			query = '';
		var set = api+"database.getCities?v=5.5&country_id="+country_id+"&count=10&region_id="+region_id+"&q="+encodeURIComponent(query);
		http.get(set, function(rews) {
		  rews.on('data', function (chunk) {
		  	data+=chunk;
		  });
		  rews.on('end', function (chunk) {
		  	   res.send(data);
		  });
 	  	});
	}
}