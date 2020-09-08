const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hola Mundo Concejo de Medellín !!!');
});

app.get('/Bolivar', (req, res) => {
    res.send(`<h1>Hola usuario!<h1>
    <h2>Bienvenido<h2`);
});

app.get('/json', (req, res)=> {
    res.json({
        nombre: "Juan Pablo",
        edad: 17
    });
});

app.get('/estudiantes/:numero_estudiantes', (req, res) =>{
    consolelog("El parametro numero_estudiantes es", req.params)
    res.json({numero_estudiantes:10})
})
app.get('/fibonacci/:num', (req, res)=>{

});
app.listen(5057, function(){
    console.log("Servidor corriendo en el puerto 5057")
});