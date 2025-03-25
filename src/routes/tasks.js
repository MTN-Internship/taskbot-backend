const express = require('express');
const router = express.Router();

// Import your data model (adjust as needed)
const Task = require('../models/Task'); 

// Utility function to get tomorrow's date
function getTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0]; // Format YYYY-MM-DD
}

// GET endpoint to fetch next day's tasks
router.get('/tasks/next-day', async (req, res) => {
    try {
        const tomorrowDate = getTomorrow();
        
        // Fetch tasks where date is tomorrow
        const tasks = await Task.find({ date: tomorrowDate });

        res.json({
            status: 200,
            message: "Tasks for the next day",
            data: tasks
        });
    } catch (error) {
        res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
    }
});

module.exports = router;
