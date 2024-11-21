const User = require("../models/User")



// get all users
exports.getAllUsers=  async (req, res) => {
    try {
      const users = await User.find({});
      // res.json(users)
      res.status(200).json(users);
      // insertDummyUsers();
    } catch (error) {
      res.status(500).json({ message: "error featching users", err: err.message })
  
    }
  };

