var ss = function(ram){
	console.log(ram);
}
exports.get = ["init",function (req, res) {
  req.session.message = 'Hello World';
  req.session.lo = 'id';
  res.json("data");
}];


