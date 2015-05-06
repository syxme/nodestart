var fs = require('fs');
var setPointRUR = function (num) {
  var str = "" + num;
  var zeroPos = str.indexOf(".")+1;
  var numpos = str.indexOf(".");
  var ssr = 0;
  if (zeroPos == -1) return 0;
  if (!numpos == 0){ 
    ssr = str.slice(0,numpos);
    ssr = ssr * 100;
  }else{
    ssr = 0;
  }
  str = str.slice(zeroPos);
  ssr = ssr+ Number(str);
  return +ssr;
}
var getRUR = function(num) {
  var tmp = num % 100;
  num = (num - tmp) / 100;
  return num+"."+tmp;
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
  setPointRUR:setPointRUR

}
module.exports = untils;