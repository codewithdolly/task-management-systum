const mongoose= require("mongoose");

const taskSchema= new mongoose.Schema({
    userID:{type: String},
    title:{type: String},
    description:{type: String},
    status: {
        type: String,
        status: ["pending", "inprogress", "done"],
        default: pending
    },
    empId: {type: String},
    createdBy: {type: String},
    cresatedAt:{type: Date, default: Date.now},
    role: {type: String, empRole:['admin', 'manager', 'employee']}

}) ;


module.exports= mongoose.model("User", taskSchema);
