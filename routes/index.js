const express = require("express");
const router = express.Router();

// Serve the API home page or welcome message
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Taskify API!",
    availableEndpoints: {
      tasks: "/api/tasks",
      // More endpoints can be added here in the future
    },
  });
});

// Catch undefined routes and respond with 404
router.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = router;
