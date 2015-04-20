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
var fname = function(x){
  return x.substring(x.lastIndexOf('/')+1,x.length);
}
var hbsName = function(x){
  var t = x.substring(x.indexOf('/')+1,x.length);
  t = t.substring(t.length-4,0);
  return t.replace('/',"_");
}
var frs = function(x){
  var name = x.substring(x.lastIndexOf('/')+1,x.length);
  return name.substring(name.lastIndexOf(".")+1,name.length);
  
}
var fx = {
  walk:walk,
  fn:fname,
  frs:frs,
  hbsName:hbsName
}
module.exports = fx;