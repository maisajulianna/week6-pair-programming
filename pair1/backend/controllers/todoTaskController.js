const mongoose = require('mongoose');
const TodoTask = require('../models/todoTaskModel');

// get all TodoTasks
const getTodoTasks = async (req, res) => {
res.status(200).json({ message: 'Hello from getTodoTasks' });
}

// Add one TodoTask
const addTodoTask = async (req, res) => {
res.status(200).json({ message: 'Hello from addTodoTask' });
}

// Get TodoTask by ID
const getTodoTask = async (req, res) => {
res.status(200).json({ message: 'Hello from getTodoTask' });
}

// Delete TodoTask by ID
const deleteTodoTask = async (req, res) => {
res.status(200).json({ message: 'Hello from deleteTodoTask' });
}

// Update TodoTask by ID
const updateTodoTask = async (req, res) => {
res.status(200).json({ message: 'Hello from updateTodoTask' });
}

module.exports = {
  getTodoTasks,
  addTodoTask,
  getTodoTask,
  deleteTodoTask,
  updateTodoTask,
};