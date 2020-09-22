const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Hola, Concejo de Medellín');
})

app.get('/Sebastian', (req, res) => {
    res.send(`<h1>Hola Fernan-sama!!!</h1>
            <h2>Saludos desde express!!!</h2>`)
})

app.get('/estudiantes/:numero_estudiantes', (req, res) => {
    console.log("El numero_estudiantes es ", req.params.numero_estudiantes)
    res.json({numero_estudiantes:req.params.numero_estudiantes})
})

app.get("/fibonacci/:num", (req, res) => {

})

app.get('/json', (red, res) => {
    res.json({nombre:"Sebastian", edad:"18"})
})

app.listen(5057, function(){
    console.log("Servidor corriendo en el puerto 5057")
})