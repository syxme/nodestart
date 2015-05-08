var fs = require('fs');
var setRUR = function (num) {
  return num*100;
}
var getRUR = function(num) {
  return num/100;
}
var listRouteAngularApp = function(){
  
  var s = fs.readFileSync("client/assets/routes.js", "utf8"),prm,x;
  var obj = {};
  for (var i=1; i<500;i++){
    if (~s.indexOf('$routeProvider.when("')){
      s = s.substr(s.indexOf('$routeProvider.when("')+21,s.length);
      x = s.substr(0,s.indexOf('",'));
      obj[x] = {};
      obj[x].url = x;
      prm = s.substr(s.indexOf('premission:"')+12,s.length);
      obj[x].premission = prm.substr(0,prm.indexOf('"'));
      if (obj[x].premission == "user"||obj[x].premission == "admin"){
        prm = prm.substr(prm.indexOf('redirectX:"')+11,prm.length);
        obj[x].redirect = prm.substr(0,prm.indexOf('"'));
      }
    }else{
      break;
    }
  }
   return obj;
}

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
var untils = {
  walk:walk,
  getRUR:getRUR,
  setRUR:setRUR,
  listRouteAngularApp:listRouteAngularApp

}
module.exports = untils;