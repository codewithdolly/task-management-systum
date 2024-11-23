const mongoose= require("mongoose");

const taskSchema= new mongoose.Schema({
    taskID:{type: String},
    title:{type: String},
    description:{type: String},
    status: {
        type: String,
        status: ["pending", "inprogress", "done"],
        default: "pending"
    },
    empId: {type: String},
    managerID:{type: String},
    // createdBy: {type: String}, //not req
    // cresatedAt:{type: Date, default: Date.now}, //not req
    // role: {type: String, empRole:['admin', 'manager', 'employee']}// not req

}) ;


module.exports= mongoose.model("Task", taskSchema);
