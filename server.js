// const express = require('express');
// const app = express();
// const cors = require('cors'); // Add CORS to allow API access from different origins

// const port = 3000;

// // Middleware
// app.use(express.json()); // Ensure Express can parse JSON
// app.use(cors()); // Enable CORS

// // Corrected Route Imports
// const taskRoutes = require('./src/routes/tasks'); // Correct path to the tasks.js file
// const dateRoute = require('./src/routes/DateRoute'); // Ensure DateRoute exists

// // Use routes
// app.use('/api/tasks', taskRoutes);  // Tasks routes
// app.use('/api/date', dateRoute);    // Date route

// // Start Server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import dateRoutes from './src/routes/DateRoute.js'; // Ensure correct capitalization
// import taskRoutes from './src/routes/tasks.js'; // Ensure correct file name

// dotenv.config(); // Load environment variables

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/date', dateRoutes);
// app.use('/api/tasks', taskRoutes); // Correct import here

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dateRoutes from './src/routes/DateRoute.js'; // Ensure correct capitalization
import taskRoutes from './src/routes/tasks.js'; // Ensure correct file name

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Add a logging middleware to check requests
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

// Routes
app.use('/api/date', dateRoutes);
app.use('/api/tasks', taskRoutes); // Correct import here

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
