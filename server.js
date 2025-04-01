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
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

// Manually set the environment variables if dotenv is not working
process.env.PORT = process.env.PORT || '5000';  // Set default port to 5000 if not in .env
process.env.MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';  // Set MongoDB URI

// Log environment variables for debugging
console.log('PORT:', process.env.PORT);  // Should log the port number
console.log('MONGO_URI:', process.env.MONGO_URI);  // Should log the MongoDB URI

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import dateRoutes from './src/routes/DateRoute.js';
import taskRoutes from './src/routes/tasks.js';

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

// Routes
app.use('/api/date', dateRoutes);
app.use('/api/tasks', taskRoutes);

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
