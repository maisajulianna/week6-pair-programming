const express = require("express");
const router = express.Router();
const {
    getBlogs,
    addBlog,
    getBlog,
    deleteBlog,
    updateBlog,
} = require("../controllers/blogController");

// GET all Blogs
router.get('/', getBlogs);

// POST a new Blog
router.post('/', addBlog);

// GET a single Blog
router.get('/:id', getBlog);

// DELETE a Blog
router.delete('/:id', deleteBlog);

// Update Blog using PUT
router.put('/:id', updateBlog);


module.exports = router;