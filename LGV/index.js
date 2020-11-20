const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hola, Institución Educativa Concejo de Medellín')
})

app.get('/laura', (req, res) => {
    res.send(`<h1>Hola Lau</h1>`)
})

app.get('/json', (req, res) => {
    res.send({nombre: "Laura",edad:17})
})

app.get("/fibonacci", (req, res) => {
    function fibonacci(n){
     let a = [0,1];
         
        for( let i=0; i<n;i++){
     
         
        res.send(a+" ");
        }
    }}  
        )

app.get('/estudiantes/:numero_estudiantes', (req, res) => {
    console.log("El parametro numero_estudiantes es:", req.param.numero_estudiantes)
    res.json({numero_estudiantes:req.param.numero_estudiantes})
})

app.get("/fibonacci/:maximo", (req, res) => {
    var fibonacci  = function (n) 
    {
      if (n===1) 
      {
        return [0, 1];
      } 
      else 
      {
        var s = fibonacci(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
      }
    };
    
    res.send(fibonacci(req.params.maximo));
})
app.listen(5057, function(){
    console.log("Servidor corriendo en el puerto 5057")
})
