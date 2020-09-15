const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hola, Concejo de Medellin')
})

app.get('/enmanuel', (req, res) =>{
    res.send
})

app.listen(5057, function () {
    console.log("Servidor corriendo en el puerto 5057")
})
import { PI, numerosImpares } from './funciones/misfunciones.js'
import vehiculo from './clases/vehiculo.js'
console.log("El valor de pi es: " + PI)

console.log("****Número Impares****");
numerosImpares();

let bmw = new vehiculo('PO90Q', 'rojo', '2000');
var xx = new vehiculo('RW23', 'verde');
console.log(bmw)
console.log(xx)
