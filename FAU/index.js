const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hola mundo');
});
name = "Felipe";
app.listen(5057, function(){
    console.log("El servidor está en uso.");
});

app.get('/felipe', (req,res) => {
    res.send(`hola ${name}`);
});

app.get('/json', (req,res) => {
    res.send(`<h1>Hola señor ${name} ¿cómo se encuentra?</h1>.json`);
});

app.get('/estudiantes/:numero_estudiantes', (req,res)=>{
    console.log("El parametro numero_estudiantes es", req.params.numero_estudiantes )
res.json({numero_estudiantes:10})
})

app.get("/fibonacci/:num", (req, res)=>{

});