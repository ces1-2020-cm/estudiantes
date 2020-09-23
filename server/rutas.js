const express = require('express');
const { fibonacci } = require('./Fibonnaci');

const rutas = express.Router();

rutas.get(
    '/fibonacci',
    fibonacci
);

module.exports = rutas;
