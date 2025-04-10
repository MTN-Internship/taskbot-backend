// // Get all tasks
// exports.getAllTasks = async (req, res) => {
//     try {
//         // Fetch tasks from the database
//         const tasks = await Task.find();

//         // Respond with the tasks array
//         return res.status(200).json(tasks); // 200 OK
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({ message: "Failed to fetch tasks" }); // 500 Internal Server Error
//     }
// };
import Task from '../models/Task.js';

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = await Task.create({ title, description });
    res.status(201).json({ message: 'Task created', task: newTask });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

// Get a task by ID
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve task' });
  }
};