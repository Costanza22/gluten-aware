const express = require('express');
const router = express.Router();
const { checkFood } = require('../controllers/foodsController');

router.get('/check', checkFood);

module.exports = router;
