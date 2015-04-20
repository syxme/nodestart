var mongoose = require("mongoose");
var Schema = mongoose.Schema;

userSchema = new Schema({
	login:String,
	pass:String,
	photo: String,
	type:{ type: Number, default: 1 },
	lastip:{type:String,default:"0.0.0.0"}
});

userSchema.statics.UpdateIp = function(req,login){
	this.update({login:req.session.user.login},{lastip:req.connection.remoteAddress},function(err,log){
	  if (err){
	    console.log("error :models.js: "+err);
	  }
	});
};
    
module.exports = models = {User: mongoose.model("User", userSchema)};