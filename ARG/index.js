const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hola, concejo de medellin!!!!')
})
app.get('/alejo', (req, res) => {
    res.send('Hola Alo!!!')
})

app.get('/json', (req,res) => {
    res.json({nombre: "Alejo", edad: "16"})
})
app.get('/estudiantes/:numero_estudiantes', (req, res) => {
    console.log("el parámetro numero_estudiantes es ", req.params.numero_estudiantes)
    res.json({numero_estudiantes:req.params.numero_estudiantes})
})
app.get("fibonacci/:num")
app.listen(5057, function(){
    console.log("Servidor corriendo en el puerto 5057")
})