const Task = require('../models/Task');
const User = require("../models/User");

//dummy task data
exports.insertDummyTasks = async (req,res) => {
    const tasks = [
        {
            taskID: 'T001',
            title: 'Complete Dashboard',
            description: 'Build the admin dashboard for the app.',
            status: 'Pending',
            empId: 'E001',
            createdBy: 'M001'
        },
        {
            taskID: 'T002',
            title: 'Fix Login Bug',
            description: 'Resolve the login issue in the app.',
            status: 'In-Process',
            empId: 'E002',
            createdBy: 'M002'
        }
    ]

    try {
        //clear old task
        await Task.deleteMany({});
        await Task.insertMany(tasks);
        res.status(200).json({ message: "tasks inserted successfully." })
    } catch (error) {
        console.log("something wrong", error.message);

    }

}

  // dummy Data
  exports.insertDummyUsers = async (req,res) => {
    const users = [
      { id: "adminId", name: 'Admin', email: 'admin@example.com', password: 'admin01', phoneNo: '1234567890', role: 'admin' },
      { id: "managerId", name: 'Manager', email: 'manager@example.com', password: 'manager01', phoneNo: '1234567890', role: 'manager' },
      { id: "empId", name: 'Employee', email: 'employee@example.com', password: 'employee01', phoneNo: '1234567890', role: 'employee' },
    ]
  
    try {
      // clear existing data
      await User.deleteMany({});
      console.log("cleared existing user data.");
  
      // insert new data
      await User.insertMany(users);
      console.log("New Data added.");
  
      res.status(200).json({ message: "users inserted successfully." })
    } catch (error) {
      console.log("error", error.message);
    }
  }
  