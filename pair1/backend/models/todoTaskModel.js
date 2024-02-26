const mongoose = require('mongoose');

const todoTaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true, default: "" },
  dueDate: { type: Date, required: true },
  completed: { type: Boolean, required: true, default: false },
  user_id: { type: String, required: true }
});

const TodoTask = mongoose.model('TodoTask', todoTaskSchema);

module.exports = TodoTask;