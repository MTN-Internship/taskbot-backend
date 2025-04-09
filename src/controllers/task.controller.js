// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        // Fetch tasks from the database
        const tasks = await Task.find();

        // Respond with the tasks array
        return res.status(200).json(tasks); // 200 OK
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to fetch tasks" }); // 500 Internal Server Error
    }
};
