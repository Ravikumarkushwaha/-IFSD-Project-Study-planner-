const Task = require("../models/Task");

//Create Task
const createTask = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;

    const task = await Task.create({
      user: req.user.id,
      title,
      description,
      deadline,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error.message);
    res.status(500).json({ message: error.message });
  }
};

//Get All Tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    res.status(500).json({ message: error.message });
  }
};

//Get Single Task
const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (task.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    res.status(200).json(task);
  } catch (error) {
    console.error("Error fetching task:", error.message);
    res.status(500).json({ message: error.message });
  }
};

//Update Task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (task.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    if (task.user.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    await task.deleteOne();
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
