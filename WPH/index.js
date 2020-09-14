const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hola, concejo de medellin!!!!')
})

app.get('/wendy', (req, res) => {
    res.send(`<h1>Hola Wendy!!!</h1>`)
})

app.get('/json', (req, res) => {
    res.send({nombre: "Wendy",edad:17})
})

app.get('/estudiantes/:numero_estudiantes', (req, res) => {
    console.log("El parametro numero_estudiantes es:", req.param.numero_estudiantes)
    res.json({numero_estudiantes:req.param.numero_estudiantes})
})

app.listen(5057, function(){
    console.log("Servidor corriendo en el puerto 5057")
})