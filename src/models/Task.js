// // models/Task.js
// const mongoose = require('mongoose');

// // Define the Task schema
// const taskSchema = new mongoose.Schema({
//     date: { type: String, required: true },  // Date of the task
//     description: { type: String, required: true },  // Task description
//     // Add more fields as needed
// });

// // Create and export the Task model
// const Task = mongoose.model('Task', taskSchema);

// module.exports = Task;
import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;