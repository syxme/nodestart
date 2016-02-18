var async = require("async");
var index = function(){
   var ctx = {};
}

index.prototype.get = function(callback){
   var ctx = {
   		text:[{login:"YES"}]
   };
   callback(null,ctx);
}

index.prototype.render = function(req,callback){
	ctx = {
		title:"TUTLE",
		text:"HEADER"
	}

	// async.auto({
	// 	users:function(cb,results){ models.User.find({}).exec(cb)}
	// },function(err,results){
	// 	ctx.text = results.users;
	// 	ctx.header = Engine.view.index_header({text:[{login:'saf'},{login:"vasa"}]});
	// 	callback(err,ctx);
	// });
	ctx.header = Engine.view.index_header({text:[{login:'saf'},{login:"vasa"}]});
	callback(null,ctx);
}
module.exports  = {index:new index};