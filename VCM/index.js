const express = require('express')
const app = express()

app.get('/', function(req,res) {
    res.send("<h1>Hola Concejo de Medellín!!</h1>")
});

app.get('/Valeria', (req, res) => {
    res.send("Hola Valeria!!")
})

app.get('/json', (req,res) => {
    res.json({Nombre:"Valeria", Edad:"17 D:"})
})

app.get('/estudiantes/:id_estudiantes', (req, res) => {
    console.log("El parámetro id_estudiantes es: ", req.params.id_estudiantes)
    res.json({id_estudiantes:req.params.id_estudiantes})
})

app.get("/fibonaci/:id_pai",(req,res) => {

    res.json({})
})

app.listen(5057, function(){
    console.log("El servidor está activo en el puerto 5057 bebé")

});