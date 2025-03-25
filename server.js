// const express = require('express');
// const app = express();
// const taskRoutes = require('./routes/tasks');
// const port = 3000;

// // Import the DateRoute
// const dateRoute = require('./src/routes/DateRoute');

// // Use the DateRoute when accessing '/api/date' URL
// app.use('/api/date', dateRoute);
// app.use('/api', taskRoutes);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require('express');
const app = express();
const cors = require('cors'); // Add CORS to allow API access from different origins

const port = 3000;

// Middleware
app.use(express.json()); // Ensure Express can parse JSON
app.use(cors()); // Enable CORS

// Corrected Route Imports
const taskRoutes = require('./src/routes/tasks'); // Correct path to the tasks.js file
const dateRoute = require('./src/routes/DateRoute'); // Ensure DateRoute exists

// Use routes
app.use('/api/tasks', taskRoutes); // Adjusted for better organization
app.use('/api/date', dateRoute);

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
