console.log("***************")



function numeroImpares(){
    for(i = 1; i <=100; i += 2){
        console.log(i);
    }
}

function numeroPare(){
    let contador = 0;
    while(contador <= 100){
        if(contador%2 == 0){
            console.log(contador);
        }
        contador = contador +1;
    }
}

function sumarNumero(n1, n2){
    let suma = 0;
    suma = n1 + n2;
    return suma;
}

function condicionalNumero(){
var numero = 2;
let numero1 = 1;
const PI = 3.14;
let contador = 0;

let suma = numero + numero1

if(suma >= 5){
    console.log("La suma es mayor o igual a 5");
}else{
    console.log("La suma es menorque 5");
}

}

console.log("*Numeros Impares**")
numeroImpares();

console.log("*Numeros Pares**")
numeroPare();

let sumaDenumeros = sumarNumero(3, 100);
console.log(`La suma de los numeso es ${sumaDenumeros}`)