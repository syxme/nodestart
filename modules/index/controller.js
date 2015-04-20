var async = require("async");
var exec = function(req, res) {
	var ctx = {};
	async.parallel({
		header:function(cb,results){context.index.render("rr",cb) },
		faders:function(cb,results){context.index.get(cb) }

	},function(err,results){
		ctx = results.header;
		ctx.faders = results.faders;
		console.log(results.faders);
		res.send(Engine.tpl.index_index(ctx));
	});		
}



exports.index = {path:"/",execute:exec};