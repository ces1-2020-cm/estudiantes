const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hola mundo');
})

app.listen(5057, function(){
    console.log("El servidor está siendo usado en este momento.");
})

app.get('/alejo', (req,res) => {
    res.send(`hola Alejandro Guerra`);
})

app.get('/json', (req,res) => {
    res.send(`<h1> Hola Alejandro Guerra </h1>`);
})

app.get('/estudiantes/:numero_estudiantes', (req,res)=>{
    console.log("El parametro numero_estudiantes es", req.params.numero_estudiantes )
res.json({numero_estudiantes:100})
})

app.get("/fibonacci/:num", (req, res)=>{

})