import {PI, numerosImpares} from './funciones/misfunciones.js'
import Moto from './clases/Moto.js'

console.log("El valor de PI es: " +PI)
console.log("Números Impares hasta el 100")
numerosImpares()

let BMW = new Moto(19,400);
var XX = new Moto(30,1000);

console.log(BMW)
console.log(XX)
/*
console.log("****Números Impares****")
numerosImpares();

console.log("****Números Pares****")
numerosPares();

let sumaDenumeros = sumaNumeros(3, 100);
//console.log("La suma de los números es", sumaDenumeros);
console.log(`La suma de los números es ${sumaDenumeros}`);*/