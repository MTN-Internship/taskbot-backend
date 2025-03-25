// // date.controller.js

// exports.getCurrentDate = (req, res) => {
//     const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
//     res.json({ date: currentDate });
// };
// date.controller.js

// Function to get the current date
exports.getCurrentDate = (req, res) => {
    const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
    res.json({ date: currentDate });
};

// Function to get the next day's date (New Addition)
exports.getNextDayDate = (req, res) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextDay = tomorrow.toISOString().split("T")[0]; // Format: YYYY-MM-DD

    res.json({ date: nextDay });
};
