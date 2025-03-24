const express = require('express');
const app = express();
const port = 3000;

// Import the DateRoute
const dateRoute = require('./src/routes/DateRoute');

// Use the DateRoute when accessing '/api/date' URL
app.use('/api/date', dateRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
