const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Hola Concejo de Medellin')
})

app.get('/padilla', (req,res)=>{
    res.send('<h1>HOLA PADILLA</h1> <h2>Saludos de express</h2>')

})
app.get('/json', (req, res)=>{
    res.send({Nombre: "Miguel", edad:16})
})
app.get('/estudiantes/:numero_estudiantes', (req,res)=>{
    console.log("El parametro numero_estudiantes es", req.params.numero_estudiantes )
res.json({numero_estudiantes:10})
})

app.get("/fibonacci/:num", (req, res)=>{

})
app.get('/seriefibonacci',(req,res) => {
    res.send("El inicio de la sequencia es: 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597. La sucesión comienza con los números 0 y 1 a partir de esto cada término es el resultado de la suma de los 2 anteriores ")
})

app.listen(5057, function(){


    console.log("Servidor Corriendo En El Puerto 5057")
const express = require('express')
const app = express() 


app.get('/', function(req, res){
    res.send('Hola Concejo de Medellin')
})

app.get('/padilla', (req,res)=>{
    res.send('<h1>HOLA PADILLA</h1> <h2>Saludos de express</h2>')

})
app.get('/json', (req, res)=>{
    res.send({Nombre: "Miguel", edad:16})
})
app.get('/estudiantes/:numero_estudiantes', (req,res)=>{
    console.log("El parametro numero_estudiantes es", req.params.numero_estudiantes )
res.json({numero_estudiantes:10})
})
})


