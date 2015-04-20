var async = require("async");
var index = function(){
   var ctx = {
   		text:[{login:"YES"}]
   };
}
index.prototype.get = function(callback){
   var ctx = {
   		text:[{login:"YES"}]
   };
   callback(ctx);
}
index.prototype.render = function(req,callback){
	ctx = {
		title:"TUTLE",
		text:"HEADER"
	}

	//console.log(engine.tpl);
	async.auto({
		users:function(cb,results){ models.User.find({}).exec(cb)}
	},function(err,results){
		ctx.text = results.users;
		ctx.header = Engine.tpl.index_header(ctx);
		callback(err,ctx);
	});
}
module.exports.index = context = {index:new index};