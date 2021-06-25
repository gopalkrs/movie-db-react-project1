const express = require('express');
const router = express.Router();
const movies = require("./movies");
const series = require("./series");

router.use("/movies",movies);
router.use("/series",series);

module.exports = router;

