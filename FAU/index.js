<<<<<<< HEAD
import {PI, numerosImpares} from './funciones/misfunciones.js';
import Moto from './clases/Moto.js'


//console.log(`El valor de pi es ${PI}`);
 console.log('////////////  Impares//////////')
 numerosImpares();

let bmw = new Moto(19, 400); //objetos
var xx = new Moto(30, 1000);

console.log(bmw);
console.log(xx);

/* console.log('//////////// pares//////////')
 numerosPares(); 

/* let sumaDenumeros = sumar(3,100);
 console.log(sumaDenumeros);
 */
=======
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
>>>>>>> 1d7dcf84b81ad11a0f73d0be6c34febd6c7e2308
