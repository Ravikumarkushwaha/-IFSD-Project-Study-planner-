const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");

// Create task
router.post("/", protect, createTask);

// Get all tasks for logged-in user
router.get("/", protect, getTasks);

// Get single task by ID
router.get("/:id", protect, getTaskById);

// Update task (mark complete or edit)
router.put("/:id", protect, updateTask);

// Delete task
router.delete("/:id", protect, deleteTask);

module.exports = router;
