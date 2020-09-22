const express = require('express');
const { fiboN } = require('./fibonacci/fibo');

const router = express.Router();

// localhost:65000/fibo?l=250
router.get(
    '/fibo',
    fiboN
);

module.exports = router;