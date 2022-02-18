const express = require('express');
const router = express.Router();
const signup = require('./login-signup/signup');
const login = require('./login-signup/login');

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;