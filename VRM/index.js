const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('hola mundo')
    
})

app.get('/valentina', (req, res) => {
    res.send( `<h1>hola valentina</h1> 
              <h2>saludos de express</h2>`)

})

app.get('/estudiantes/:numero_estudiantes', (req, res) =>{
    console.log("el paramero numero_estudiantes es", req.params)
    res.json({numero_estudiantes:req.params.numero_estudiantes})

})

app.get("/fibonacci/:run")

app.get('/json', (req, res) => {
    res.json({nombre: "valentina", edad:"17"})
})

app.listen(5058, function(){
    console.log("servidor corriendo en el puerto")
})