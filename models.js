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
    type:{ type: Number, default: 1 }
  });

  settingsSchema = new Schema({
    _id: {
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
