const mongoose = require("mongoose");
const noteSchema= new mongoose.Schema({
  title:String,
  content:String,
})
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required:true,
    },
    notes:{
      type:[noteSchema]
    }
}
    
   
 
);

module.exports = mongoose.model("User", userSchema);