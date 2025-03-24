// date.controller.js

exports.getCurrentDate = (req, res) => {
    const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
    res.json({ date: currentDate });
};
