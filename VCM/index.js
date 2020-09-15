<<<<<<< HEAD
import {PI} from './funciones/misfunciones.js'
import Moto from './clases/Moto.js'

console.log("El valor de PI es: "+ PI)

console.log("****Numeros Impares****")
NumerosImpares();

let BMW = new Moto(19,400);
var XX = new Moto(30,1000);

console.log (BMW) 
console.log (XX)

/*
console.log("****Numeros Impares****")
NumerosImpares();

console.log("****Numeros Pares****")
NumerosPares();

let sumaDenumeros = sumarNumeros(3,100);
console.log (`La suma de los numeros es ${sumaDenumeros}`) 
*/
=======
const express = require('express')
const app = express()

app.get('/', function(req,res) {
    res.send("<h1>Hola Concejo de Medellín!!</h1>")
});

app.get('/Valeria', (req, res) => {
    res.send("Hola Valeria!!")
})

app.get('/json', (req,res) => {
    res.json({Nombre:"Valeria", Edad:"17 D:"})
})

app.get('/estudiantes/:id_estudiantes', (req, res) => {
    console.log("El parámetro id_estudiantes es: ", req.params.id_estudiantes)
    res.json({id_estudiantes:req.params.id_estudiantes})
})

//app.get("/fibonaci/:id_pai",(req,res) => {

   // res.json({})
//})

app.listen(5057, function(){
    console.log("El servidor está activo en el puerto 5057 bebé")

});
>>>>>>> 1d7dcf84b81ad11a0f73d0be6c34febd6c7e2308
