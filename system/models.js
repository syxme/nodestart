var ObjectId, Schema, exports, mongoose;
mongoose = require("mongoose");
Schema = mongoose.Schema;
ObjectId = Schema.Types.ObjectId;

 var settingsSchema, userSchema;
  mongoose.connect("mongodb://localhost:27017/syxme");
  //0:guest
  //1:user
  //2:admin


  
  userSchema = new Schema({
    login:String,
    pass:String,
    photo: String,
    type:{ type: Number, default: 1 },
    lastip:{type:String,default:"0.0.0.0"}
  });
  daymonSchema = new Schema({
    _id:{ type: String, ref: "User" },
    payout:[{
      date:Date,
      money:String
    }],
    data:{
      money:String,
      GetMoney:Date,
      GetnextMoney:Date
    }
  });
  userSchema.statics.UpdateIp = function(req,login){
    this.update({login:req.session.user.login},{lastip:req.connection.remoteAddress},function(err,log){
      if (err){
        console.log("error :models.js: "+err);
      }
    });
  };
  settingsSchema = new Schema({
    _id: {
      type: String,
      unique: true
    },
    value: Schema.Types.Mixed
  });
  
models = {
    User: mongoose.model("User", userSchema),
    DayMon: mongoose.model("DayMon", daymonSchema),
    Settings: mongoose.model("Settings", settingsSchema),
 };
  
module.exports = models;
