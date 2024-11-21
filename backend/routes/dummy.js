const express= require('express');
const router= express.Router();
const dummyController= require("../controllers/dummyController");

// get all users
router.get("/user", dummyController.insertDummyUsers);
router.get("/task",dummyController.insertDummyTasks);


module.exports= router;
