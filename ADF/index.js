<<<<<<< HEAD
import {PI,numerosImpares} from './Funciones/misFunciones.js'
import Moto from './CLASES/Moto.js'

console.log("El valor de PI es: " + PI)


console.log("****Números Impares*****") 
numerosImpares();

let BMW = new Moto(19, 400) ;
var XX = new Moto(30, 1000);

console.log(BMW)
console.log(XX)

/*
console.log("****Números Pares*****")
numerosPares();

let sumaDenumeros = sumarNumeros(3, 100);
console.log(`La suma de los número es ${sumaDenumeros}`) */
=======
const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Cargando....');
});

app.get('/home', (req, res) => {
    res.send('Hola Alejandro');
});

app.get('/json', (req, res) => {
    res.json({nombre:"Alejandro", edad:17})
});

app.listen(5057, function(){
    console.log("servidor corriendo en el puerto 5057");
});
>>>>>>> 1d7dcf84b81ad11a0f73d0be6c34febd6c7e2308
