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