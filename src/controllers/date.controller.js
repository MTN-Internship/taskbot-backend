
const Task = require('../models/taskModel');  


exports.createTask = async (req, res) => {
  try {
    const { message, answer } = req.body;

    
    const newTask = new Task({ message, answer });
    await newTask.save();

    res.status(201).json({ message: 'Task created successfully', task: newTask });
  } catch (err) {
    res.status(500).json({ message: 'Error creating task', error: err.message });
  }
};


exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving tasks', error: err.message });
  }
};
