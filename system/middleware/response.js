var ld = require("lodash");
module.exports = function(req, res) {
	var code;
	code = 200 || res.statusCode;
	if (res.response != null) {
		if (Array.isArray(res.response)) {
			res.send(code, res.response);
		} else if (typeof res.response === "object") {
			if (res.response.toObject != null) {
				res.response = res.response.toObject();
			}
			res.send(code, ld.extend({success: true}, res.response));
		} else {
			return res.send(code, res.response);
		}
	} else {
		res.send(code, {success: true});
	}
};	