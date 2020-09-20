const express = require('express');
const { Fibonacci } = require('./fibonacci_T/fibonacci');


const router = express.Router();

router.get('/fibonacci',Fibonacci);

module.exports = router;