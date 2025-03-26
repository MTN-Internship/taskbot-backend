// const express = require('express');
// const router = express.Router();
// const dateController = require('../controllers/date.controller'); // Import the controller

// // Define a GET route for the current date
// router.get('/', dateController.getCurrentDate);

// // Define a GET route for the next day's date (New Addition)
// router.get('/next-day', dateController.getNextDayDate);

// module.exports = router;
import express from 'express';
const router = express.Router();
import { getCurrentDate, getNextDayDate } from '../controllers/date.controller.js';

// Define a GET route for the current date
router.get('/', getCurrentDate);

// Define a GET route for the next day's date
router.get('/next-day', getNextDayDate);

export default router; // Use ES module export syntax
