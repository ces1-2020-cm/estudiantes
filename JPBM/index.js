const express = require('express')
const app = express()

app.get('/', function(req, res) {

    res.send(`Hola Mundo Concejo de Medellín`);
});

app.get('/juan', (req, res) => {
    res.send(`<h1>Te doz la bienvenida<h1>
    <h2>usuario<h2`);
});

app.get('/json', (req, res)=> {
    res.json({
        nombre: "Bolivar",
        edad: 17
    });
});

app.get('/estudiantes/:numero_estudiantes', (req, res)=>{
    console.log('El parametro numero_estudiantes es ', req.params.numero_estudiantes);
    res.json({
        numero_estudiantes: req.params.numero_estudiantes
    });
});

app.get('/fibonacci/:limite', (req, res,)=>{
    function Fibonaccisucesion(sucesion)
    {
        let fibonumero =[0,1];
        
        for (let i = 2; i < sucesion; i++) 
        {
            fibonumero[i] = fibonumero[i - 2] + fibonumero[i - 1];
        }
        return fibonumero;
    }
    res.json( "La sucesion de fibonacci es: " + Fibonaccisucesion(req.params.limite));
     
        

});


app.listen(5057, function(){
    console.log("Servidor corriendo en el puerto 5057")
});