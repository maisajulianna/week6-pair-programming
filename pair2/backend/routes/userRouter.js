const express = require('express')
const { loginUser, signupUser } = require('../controllers/userController')
const router = express.Router()


// POST a new user / signup
router.post('/signup', signupUser)

// POST an existing user / login
router.post('/login', loginUser)


module.exports = router