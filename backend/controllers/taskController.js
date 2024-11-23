
const Task = require('../models/Task');


// get all Task
exports.getAllTask = async (req, res) => {
    try {
        const TaskList = await Task.find({});
        res.status(200).json(TaskList);

    } catch (error) {
        res.status(500).json({ message: "error featching task", error: error.message })

    }
};

//   create new task
exports.createTask = async (req, res) => {
    const { taskID, title, description, status, empId, managerID } = res.body;
    const newTask = { taskID, title, description, status, empId, managerID }

    try {
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: "failed create task", error: error.message })
    }
}

//single task read
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching task', error: error.message });
    }
};

//single task read
exports.getTaskByempId = async (req, res) => {
    try {
        const task = await Task.find({empId: req.params.id});
        if (!task) {
            return res.status(404).json({ message: 'Tasks not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks by empId', error: error.message });
    }
};

//updateTask
exports.updateTask = async (req, res) => {
    const taskID = req.params.id;
    try {
        const updateTask = await Task.findByIdAndUpdate(taskID, req.body, { new: true })
        res.status(200).json(updateTask)

    } catch (error) {
        console.log("failed to update task", error.message);

    }
}

//deleteTask
exports.deleteTask = async (req, res) => {
    const taskID = req.params.id;
    try {
        await Task.findByIdAndDelete(taskID)
        res.status(200).json({ message: "Task deleted successfully." })

    } catch (error) {
        console.log("failed to delete task", error.message);

    }
}

