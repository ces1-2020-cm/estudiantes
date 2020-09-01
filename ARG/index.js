var numero = 2;
let numero1 = 1;
let cont = 0;
const PI =  3.1416;

let suma = numero+numero1;
/*
if(suma >= 5){
    console.log("La suma es mayor o igual a cinco")
} else{
    console.log("La suma es menor que cinco")
}

while(cont <= 100){
    if(cont%2 ==0)
    console.log(cont)
    cont = cont+1
    
}

for(i =1; i <=10; i+=2){
    console.log(i)
}
*/
function numerosImpares(){
    for(i =1; i <=10; i+=2){
        console.log(i)
    } 
}
function numerosPares(){
    let cont =0;
    while(cont <= 100){
        if(cont%2 ==0)
        console.log(cont)
        cont = cont+1
        
    }
}

function sumarNumeros(n1, n2){
    let suma = 0;
    suma = n1+n2;
    return suma;
}
function condicionalNumero(){
    var numero = 2;
    let numero1 = 1;
    let cont = 0;
    const PI =  3.1416;
    
    let suma = numero+numero1;
    
    if(suma >= 5){
        console.log("La suma es mayor o igual a cinco")
    } else{
        console.log("La suma es menor que cinco")
    } 
}


console.log("**Numeros Impares**");
numerosImpares();

console.log("**Numeros Pares****");
numerosPares();

let sumaNumeros = sumarNumeros(3, 100);
console.log(`la suma de los números es ${sumaNumeros}`);