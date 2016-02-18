var async = require("async");
var _ = require("lodash");

var exec = function(req, res) {
	var ctx = {};

	async.parallel({
		context	:function(cb,results){modules['index'].render({},cb) },
		header	:function(cb,results){cb(null,Engine.view.index_header(ctx))},
		menu	:function(cb,results){modules['menu'].render({},cb) }
	},function(err,results){
		ctx = results.context;
		ctx = _.extend(ctx,results);
		res.send(Engine.view.index_layout(ctx));
	});		
}



exports.index = {path:"/",execute:exec};