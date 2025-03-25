// // DateRoute.js
// const express = require('express');
// const router = express.Router();
// const dateController = require('../controllers/date.controller'); // Import the controller

// // Define a GET route for current date
// router.get('/', dateController.getCurrentDate);

// module.exports = router;

const express = require('express');
const router = express.Router();
const dateController = require('../controllers/date.controller'); // Import the controller

// Define a GET route for the current date
router.get('/', dateController.getCurrentDate);

// Define a GET route for the next day's date (New Addition)
router.get('/next-day', dateController.getNextDayDate);

module.exports = router;
