const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Cargando....');
});

app.get('/home', (req, res) => {
    res.send('Hola Alejandro');
});

app.get('/json', (req, res) => {
    res.json({nombre:"Alejandro", edad:17})
});

app.listen(5057, function(){
    console.log("servidor corriendo en el puerto 5057");
});