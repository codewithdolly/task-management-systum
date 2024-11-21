const User = require("../models/User")



// get all users
exports.getAllUsers=  async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users)
      insertDummyUsers();
    } catch (error) {
      res.status(500).json({ message: "error featching users", err: err.message })
  
    }
  };

  // dummy Data
const insertDummyUsers = async () => {
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
  
  
    } catch (error) {
      console.log("error", err.message);
    }
  }
  