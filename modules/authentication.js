var models = require("../models");
var authentication = function() {
	this.result = 15;
	return "fuck";

}
authentication.prototype.result = 0;

authentication.prototype.go = function (req) {
  return true;

}
module.exports = authentication;