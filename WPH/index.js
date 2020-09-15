<<<<<<< HEAD
import { PI,numerosImpares } from "./funciones/misfunciones.js";
import moto from "./clases/moto.js";

console.log("El valor de PI es:" +PI)

console.log ("******Números Impares******")
numerosImpares();


let BMW = new  moto("19,400");
var XX = new moto("30, 1000");

console.log(BMW)
console.log(XX)

/*
console.log("***Numeros Impares***");
numerosImpares();

console.log("***Numeros Pares***");
numerosPares();

let sumaDeNumeros = sumarNumeros(3, 100);
console.log(`la suma de los números es ${sumaDeNumeros}`)
*/
=======
const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hola, concejo de medellin!!!!')
})

app.get('/wendy', (req, res) => {
    res.send(`<h1>Hola Wendy!!!</h1>`)
})

app.get('/json', (req, res) => {
    res.send({nombre: "Wendy",edad:17})
})

app.get('/estudiantes/:numero_estudiantes', (req, res) => {
    console.log("El parametro numero_estudiantes es:", req.param.numero_estudiantes)
    res.json({numero_estudiantes:req.param.numero_estudiantes})
})

app.listen(5057, function(){
    console.log("Servidor corriendo en el puerto 5057")
})
>>>>>>> 1d7dcf84b81ad11a0f73d0be6c34febd6c7e2308
