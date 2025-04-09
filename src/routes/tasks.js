// const express = require('express');
// const router = express.Router();

// // Import your data model (adjust as needed)
// const Task = require('../models/Task'); 

// // Utility function to get tomorrow's date
// function getTomorrow() {
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     return tomorrow.toISOString().split('T')[0]; // Format YYYY-MM-DD
// }

// // GET endpoint to fetch next day's tasks
// router.get('/tasks/next-day', async (req, res) => {
//     try {
//         const tomorrowDate = getTomorrow();
        
//         // Fetch tasks where date is tomorrow
//         const tasks = await Task.find({ date: tomorrowDate });

//         res.json({
//             status: 200,
//             message: "Tasks for the next day",
//             data: tasks
//         });
//     } catch (error) {
//         res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
//     }
// });

// module.exports = router;

// import express from 'express';
// const router = express.Router();

// // Import your data model (adjust as needed)
// import Task from '../models/Task.js'; // Use ES module import syntax

// // Utility function to get tomorrow's date
// function getTomorrow() {
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     return tomorrow.toISOString().split('T')[0]; // Format YYYY-MM-DD
// }

// // Utility function to get yesterday's date
// function getYesterday() {
//     const yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1);
//     return yesterday.toISOString().split('T')[0]; // Format YYYY-MM-DD
// }

// // GET endpoint to fetch next day's tasks
// router.get('/tasks/next-day', async (req, res) => {
//     try {
//         const tomorrowDate = getTomorrow();
        
//         // Fetch tasks where date is tomorrow
//         const tasks = await Task.find({ date: tomorrowDate });

//         res.json({
//             status: 200,
//             message: "Tasks for the next day",
//             data: tasks
//         });
//     } catch (error) {
//         res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
//     }
// });

// // GET endpoint to fetch previous day's tasks
// router.get('/tasks/previous-day', async (req, res) => {
//     try {
//         const yesterdayDate = getYesterday();
        
//         // Fetch tasks where date is yesterday
//         const tasks = await Task.find({ date: yesterdayDate });

//         res.json({
//             status: 200,
//             message: "Tasks for the previous day",
//             data: tasks
//         });
//     } catch (error) {
//         res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
//     }
// });
import express from "express";
import Task from "../models/Task.js"; // Import the model

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    const newTask = new Task({ title, description });
    await newTask.save();

    res.status(201).json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;

