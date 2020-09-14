import { pi, nImpares } from './funciones/app';
import Moto from './clases/moto';

console.log(`El valor de la constante pi es: ${pi}`);
console.log(`###  Numeros Impares  ###\n${nImpares()}`);

let susuki = new Moto(20, 375);
console.log(susuki);