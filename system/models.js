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

  daymonSchema = new Schema({
    id:{ type: String, ref: "User" },
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
  settingsSchema = new Schema({
    id: {
      type: String,
      unique: true
    },
    value: Schema.Types.Mixed
  });
  
models = {
    DayMon: mongoose.model("DayMon", daymonSchema),
    Settings: mongoose.model("Settings", settingsSchema),
 };
  
module.exports = models;
