<<<<<<< HEAD

import {PI, numerosImpares} from "./funciones/misfunciones.js"
import POO from "./clases/Moto.js"

console.log("el valor de PI es:" + PI)

console.log("numeros impares")
numerosImpares();

let BMW = new Moto(19, 400);
var XX = new Moto(30, 600);

console.log(BMW)
console.log(XX)
/*   console.log('////////////impares//////////')
 numerosImpares();

 console.log('////////////impares//////////')
 numerosPares(); 

 let sumaDenumeros = sumar(3,100);
 console.log(sumaDenumeros);   
  */    
=======
const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('hola mundo')
    
})

app.get('/valentina', (req, res) => {
    res.send( `<h1>hola valentina</h1> 
              <h2>saludos de express</h2>`)

})

app.get('/estudiantes/:numero_estudiantes', (req, res) =>{
    console.log("el paramero numero_estudiantes es", req.params)
    res.json({numero_estudiantes:req.params.numero_estudiantes})

})

app.get("/fibonacci", (req, res) => {
    function fibonacci(numero)
    {
        let numeros=[0,1];
        for (let i = 2; i < numero; i++) {
            numeros[i] = numeros[i - 2] + numeros[i - 1];
        }
        return numeros;
    }
 
    res.send(fibonacci(30));
        
})


app.get('/json', (req, res) => {
    res.json({nombre: "valentina", edad:"17"})
})

app.listen(5058, function(){
    console.log("servidor corriendo en el puerto")
})
