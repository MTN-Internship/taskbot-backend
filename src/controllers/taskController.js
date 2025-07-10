import Task from '../models/Task.js';

// Create Task
export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const task = await Task.create({ title, description, status });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get All Tasks Grouped by Status
export const getTasksByStatus = async (req, res) => {
  try {
    const tasks = await Task.find();
    const grouped = {
      todo: tasks.filter(t => t.status === 'To Do'),
      inProgress: tasks.filter(t => t.status === 'In Progress'),
      done: tasks.filter(t => t.status === 'Done'),
    };
    res.json(grouped);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Task
export const updateTask = async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Task
export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
