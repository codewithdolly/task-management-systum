const mongoose= require("mongoose");

const userSchema= new mongoose.Schema({
    userID:{type: String},
    name:{type: String},
    email:{type: String},
    pass: {type: String},
    phoneNo:{type: String},
    role: {type: String, empRole:['admin', 'manager', 'employee']}

}) ;


module.exports= mongoose.model("User", userSchema);
