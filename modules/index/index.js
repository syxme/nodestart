var async = require("async");
var index = function(){
   var ctx = {
   		title:"FUCK FUCK"
   }
   
}

index.prototype.render = function(req,callback){
	ctx = {
		title:"TUTLE"
	}
	
	//console.log(engine.tpl);
	async.auto({
		index:function(cb,results){ models.User.find({}).exec(cb)}
	},function(err,results){
		ctx.header = results.index;
		callback(err,ctx);
	});
}
module.exports.index = context = {index:new index};