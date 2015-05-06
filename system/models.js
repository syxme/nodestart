var ObjectId, Schema, exports, mongoose;
mongoose = require("mongoose");
Schema = mongoose.Schema;
utl = require("./utils"),
ld = require("lodash"),
ObjectId = Schema.Types.ObjectId;

 var settingsSchema, userSchema;
  mongoose.connect("mongodb://localhost:27017/syxme");

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
    zip: String,
    money:String
  });
  userSchema.statics.getUser = function(req,cb){
    this.findOne({_id:req.session.user._id}, function(err, user) {
      if (err) {
        cb(err,false);
      }else{
        if (user){
          user = ld.omit(user.toObject(),['__v','password','login']);
          user.money = money = utl.getRUR(user.money);
          cb(false,user);
        }else{
          cb("not user",false) 
        }
      }
    });
  };

  userSchema.statics.addmoney = function(req,money,cb){
    this.getUser(req,function(err,x){
      if (x.money){
        money = utl.setPointRUR(money) + utl.setPointRUR(x.money);
      }else{
        money = utl.setPointRUR(money); 
      }
      models.User.update({_id:req.session.user._id},{money:money},function(err,log){
        if (!err){
          cb(err,log);
        }else{
          cb(err,log);
        }
      });
    });
  };

  carSchema = new Schema({
    user:{ 
      type: ObjectId, 
      ref: "User" },
    name:String,
    marka:String,
    model:String,
    doc_type:String,
    year:Number,
    probeg:String,
    crash:String,
    roz_price:String,
    remont_price:String,
    vin:String,
    type_kuzov:String,
    color:String,
    engine:String,
    keys:String,
    status:String,
    auctionDATA:{
      targetPrice:Number,
      lastbid:{
        user:{
          user:{ 
            type: ObjectId, 
            ref: "User" },
          money:Number
        }
      }
    },
    photo:[]
  });

  auctionTypeSchema = new Schema({
    name:String,
    time:Number,
  });

  auсtionsSchema = new Schema({
    cars:[{ 
      type: ObjectId, 
      ref: "Car" }],
    type:{ 
      type: ObjectId, 
      ref: "AuctionType" },
    start:Date,
    end:Date
  });

  settingsSchema = new Schema({
    id: {
      type: String,
      unique: true
    },
    value: Schema.Types.Mixed
  });
  
models = {
    User: mongoose.model("User", userSchema),
    Car: mongoose.model("Car", carSchema),
    AuctionType: mongoose.model("AuctionType", auctionTypeSchema),    
    Auctions: mongoose.model("Auctions", auсtionsSchema),    
    Settings: mongoose.model("Settings", settingsSchema),
 };
  
module.exports = models;
