
// const express = require('express');
// const app = express();
// const port = 5000;

// // Add this route
// app.get('/api/v1/tasks', (req, res) => {
//     res.json({message: "This is your tasks endpoint"});
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
import express from 'express';
import { createTask, getTask } from '../controllers/task.controller.js';

const router = express.Router();

router.post('/', createTask);        // POST /api/tasks
router.get('/:id', getTask);         // GET /api/tasks/:id

export default router;