// DateRoute.js
const express = require('express');
const router = express.Router();
const dateController = require('../controllers/date.controller'); // Import the controller

// Define a GET route for current date
router.get('/', dateController.getCurrentDate);

module.exports = router;

