const mongoose = require("mongoose");
const express = require("express")
const User = require("./models/User")
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

// Initialize Express
const app = express();

// Start Server
const PORT = process.env.PORT || 8000;


// Middleware
app.use(cors());
app.use(bodyParser.json());

// mongoDB URI //Uniform Resource Identifier
MONGO_URI = "mongodb+srv://codewithdolly:7NpXoHXJikqElxoz@task-management-systum.iqtyh.mongodb.net/"

//Database Connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB is Connected. ')
    // show data
    insertDummyUsers();
  })
  .catch(err => console.error('Database connection error:', err));

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

// Dummy Route
app.get('/', (req, res) => {
  res.send('Server is running on localhost:8000');
});

// get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: "error featching users", err: err.message })

  }
})

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




