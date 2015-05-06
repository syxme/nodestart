var ld = require("lodash");
module.exports = function(req, res) {
	var code;
	code = 200 || res.statusCode;
	if (res.response != null) {
		if (Array.isArray(res.response)) {
			res.status(code).send(res.response);
		} else if (typeof res.response === "object") {
			if (res.response.toObject != null) {
				res.response = res.response.toObject();
			}
			res.status(code).send(ld.extend({success: true}, res.response));
		} else {
			return res.status(code).send(res.response);
		}
	} else {
		res.status(code).send({success: true});
	}
};