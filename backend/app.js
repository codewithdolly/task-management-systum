const mongoose = require("mongoose");
const express = require("express")
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const pageRouter= require('./routes/routes')


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
  })
  .catch(err => console.error('Database connection error:', err));


// Dummy Route
app.get('/', (req, res) => {
  res.send('Server is running on localhost:8000');
});

// Define All Route 
pageRouter(app);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




