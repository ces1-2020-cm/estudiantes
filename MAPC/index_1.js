import {PI,numerosImpares } from "./funciones/misfunciones.js"
import Moto from "./clases/Moto.js"

console.log("El valor de PI es:" + PI)


console.log("*****Número Impares*****");
numerosImpares();

let BMW = new Moto(19, 400);
var xx = new Moto(30, 1000);

console.log(BMW)
console.log(xx)
/*
console.log("*****Numeros Pares*****");
numerosPares();

let sumaDenumeros = sumarNumeros(3,100);
console.log(`La suma de los números es ${sumaDenumeros}`);*/