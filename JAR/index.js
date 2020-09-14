const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hola, Concejo de Medellín');
});

app.get('/jerson', (req, res) => {
    res.send('<h1>Hola Jerson!!!</h1><h2>Saludos desde express!!!</h2>')
});

app.get('/json', (req, res)=>{
    res.json({nombre:'Jerson', edad: '18'})
});

app.get('/estudiantes/:numero_estuduantes', (req, res)=>{
    console.log('El parametro numero_estudiantes es ', req.params.numero_estudiantes)
    res.json({numero_estudiantes:req.params.numero_estudiantes})
});

app.listen(5057, function () {
    console.log('Servidor corriendo en el puerto 5057')
});