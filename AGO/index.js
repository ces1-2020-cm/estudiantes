const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hola mundo');
})

app.listen(5057, function(){
    console.log("El servidor está ocupado.");
})

app.get('/felipe', (req,res) => {
    res.send(`hola alejandro`);
})

app.get('/json', (req,res) => {
    res.send(`<h1>Hola señor alejandro ¿cómo se encuentra?</h1>.json`);
})

app.get('/estudiantes/:numero_estudiantes', (req,res)=>{
    console.log("El parametro numero_estudiantes es", req.params.numero_estudiantes )
res.json({numero_estudiantes:10})
})

app.get("/fibonacci/:num", (req, res)=>{

})