const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hola mundo');
});

app.listen(5057, function(){
    console.log("El servidor se encuentra en uso.");
});

app.get('/juan', (req,res) => {
    res.send(`hola <3 Wglop <3`);
});

app.get('/json', (req,res) => {
    res.send(`<h1> Hola <3 Wglop <3 </h1>`);
});

app.get('/estudiantes/:numero_estudiantes', (req,res)=>{
    console.log("El parametro numero_estudiantes es", req.params.numero_estudiantes )
res.json({numero_estudiantes:10})
})