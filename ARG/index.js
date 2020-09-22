
import { PI,numerosImpares } from "./funciones/misfunciones.js";
import moto from "./clases/moto.js";

console.log("El valor de PI es:" +PI)

console.log ("***Números Impares***")
numerosImpares();


let BMW = new  moto("19,400");
var XX = new moto("30, 1000");

console.log(BMW)
console.log(XX)

/*
console.log("**Numeros Impares**");
numerosImpares();

console.log("**Numeros Pares**");
numerosPares();

let sumaDeNumeros = sumarNumeros(3, 100);
console.log(`la suma de los números es ${sumaDeNumeros}`)
*/

const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hola, concejo de medellin!!!!')
})
app.get('/alejo', (req, res) => {
    res.send('Hola Alo!!!')
})

app.get('/json', (req,res) => {
    res.json({nombre: "Alejo", edad: "16"})
})
app.get('/estudiantes/:numero_estudiantes', (req, res) => {
    console.log("el parámetro numero_estudiantes es ", req.params.numero_estudiantes)
    res.json({numero_estudiantes:req.params.numero_estudiantes})
})
app.get("/fibonacci/:limite", (req, res) => {
    console.log("el número límite es", req.params.limite)
    function fibonacci(numero){
        let serie=[0,1];
        for (let i = 2; i < numero; i++) {
            serie[i] = serie[i-2] + serie[i-1];
        }
        return serie;
    }
    res.json(fibonacci(req.params.limite))
})
app.listen(5057, function(){
    console.log("Servidor corriendo en el puerto 5057")
})

