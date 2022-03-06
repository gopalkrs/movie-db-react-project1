const express = require('express');
const router = express.Router();
const signup = require('./login-signup/signup');
const login = require('./login-signup/login');
const moviereview = require('../reviews/moviereview');
const seriesreview = require('../reviews/seriesreview');
const authenticate = require('../verifytoken/authenticate');
const getmoviereviews = require('../reviews/getmoviereview');
const getseriesreview = require('../reviews/getseriesreview');
const getuser = require('../user/login-signup/getuser');

router.post('/signup', signup);
router.post('/login', login);
router.post('/moviereviews',authenticate, moviereview);
router.post('/seriesreviews',authenticate, seriesreview);

router.get('/:userId', getuser);
router.get('/moviereviews/:movieId', getmoviereviews);
router.get('/seriesreviews/:seriesId', getseriesreview);

module.exports = router;