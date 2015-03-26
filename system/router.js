var fs = require('fs');
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
  
	walk("api", function(err, file) { 
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




  app.get('/admin/', function(req, res){res.render("indexadmin");});
  app.get('/admin/:option/', function(req, res){res.render("indexadmin");});
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