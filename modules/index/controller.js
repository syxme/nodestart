var async = require("async");
var exec = function(req, res) {
	var ctx = {};
	async.auto({
		index:function(cb,results){context.index.render("rr",cb) }
	},function(err,results){
		console.log(results.index);
		ctx = results.index;
		console.log(Engine.tpl.gidro(ctx))
		res.send(Engine.tpl.gidro(ctx));
	});		
}



exports.index = {path:"/",execute:exec};