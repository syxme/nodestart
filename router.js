var fs = require('fs');
var auth = require("./modules/authentication");
var auths = new auth();

var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = dir + '/' + file;
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};


initApi = function(app) {
var models = require("./models");

var folder,api;
  
	walk("api", function(err, apis) { 
		Object.keys(apis).forEach(function (num) {
			folder	= apis[num].replace(/(\w+)\/(\w+)\/(\w+).js/, "$2");
	  		api = require("./"+apis[num]);  
			Object.keys(api).forEach(function (method) {
	  			app[method]("/api/"+folder+'/'+api[method][0],api[method][1]);	
	  		});
  		});
	});



  app.get('/admin/*', function(req, res){
    console.log("admin");
    res.render("indexadmin");
  });

	app.get('*', function(req, res){
    console.log("index")
    res.render("index");

  });

};

module.exports = initApi;