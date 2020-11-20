import {PI,numerosImpares} from './funciones/misfunciones.js'
import vehiculo from './clases/vehiculo.js'
console.log("El valor de pi es: "+ PI)

console.log("Número Impares");
numerosImpares();

let ferrari = new vehiculo('WI90k', 'roja', '488 GtB');
var bmw = new vehiculo('KZ46', 'azul');
console.log(ferrari)
console.log(bmw)