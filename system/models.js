var ObjectId, Schema, exports, mongoose;
mongoose = require("mongoose");
Schema = mongoose.Schema;
ObjectId = Schema.Types.ObjectId;

 var settingsSchema, userSchema;
  mongoose.connect("mongodb://localhost:27017/syxme");
  //mongoose.connect("mongodb://admin:VWSsE7s7W_fS@"+process.env.OPENSHIFT_MONGODB_DB_HOST+":27017/syxme");

  //0:guest
  //1:user
  //2:admin

  userSchema = new Schema({
    login:String,
    password:String,
    adress:String,
    city:String,
    company:String,
    country:String,
    email:String,
    firstname:String,
    lastname:String,
    phone:String,
    region:String,
    zip: String
  });

  autoSchema = new Schema({
    user:{ 
      type: ObjectId, 
      ref: "User" },
    name:String,
    marka:String,
    model:String,
    doc_type:String,
    probeg:String,
    doc_type:String,
    crash:String,
    roz_price:String,
    remont_price:String,
    vin:String,
    type_kuzov:String,
    color:String,
    engine:String,
    keys:String,
    status:String,
    photo:[]
  });
  auсtionsSchema = new Schema({
    auto:{ 
      type: ObjectId, 
      ref: "Auto" },
    type:String,
  });
  userSchema.statics.UpdateIp = function(req,login){
    this.update({login:req.session.user.login},{lastip:req.connection.remoteAddress},function(err,log){
      if (err){
        console.log("error :models.js: "+err);
      }
    });
  };
  settingsSchema = new Schema({
    id: {
      type: String,
      unique: true
    },
    value: Schema.Types.Mixed
  });
  
models = {
    User: mongoose.model("User", userSchema),
    Settings: mongoose.model("Settings", settingsSchema),
 };
  
module.exports = models;
