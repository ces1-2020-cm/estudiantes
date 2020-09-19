const express = require('express');
const routes = require('./routes');

const app = express();
/* import { pi, nImpares } from './funciones/app';
import Moto from './clases/moto';

console.log(`El valor de la constante pi es: ${pi}`);
console.log(`###  Numeros Impares  ###\n${nImpares()}`);

let susuki = new Moto(20, 375);
console.log(susuki); */

app.use('/', routes);

app.listen(65000, () => {
    console.log(`Server running on port ${65000}`)
});