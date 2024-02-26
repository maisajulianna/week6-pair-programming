const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true},
  publishedDate: { type: Date, required: true },
  published: { type: Boolean, default: false },
  user_id: { type: String, required: true }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;