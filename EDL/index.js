const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hola, Concejo de Medellin')
})

app.get('/enmanuel', (req, res) =>{
    res.send
})

app.listen(5057, function () {
    console.log("Servidor corriendo en el puerto 5057")
})