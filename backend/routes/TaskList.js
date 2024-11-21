const express= require('express');
const router= express.Router();
const taskController= require("../controllers/taskController");

// get all users
router.get("/", taskController.getAllTask);
router.get("/employee/:id",taskController.getTaskByempId);
router.get("/:id",taskController.getTaskById);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);


module.exports= router;
