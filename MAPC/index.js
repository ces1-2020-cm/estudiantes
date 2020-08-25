
function numerImpares(){
    for(i = 0;i <= 100; i+=2){
console.log(i)
    }
}

function numerPares(){
    let cont = 0;
    while (cont <= 100){
        if(cont%2==0){
            console.log(cont);
        }
        //cont = cont + 1;
        cont++;
    }
}

function sumarNumeros(n1,n2){
    let suma = 0;
    suma = n1+ n2;
    return suma;
}

function condictionalNumero(){
    var numero = 2;
    let numero1 = 1;
    const PI=3.1416;
    let cont=0
    let suma= numero + numero1;

    if(suma >= 5){
        console.log(´La suma de´ +numero+ ´y´ +numero1 + ´es´ +)
    }else{
        console.log(´la suma de ${numero} y ${numero1} es ${suma}´)
    }
}

console.log("**numeros impares**")
numerImpares();

console.log("**numeros pares**")
numerPares();

let sumaDenumeros = sumarNumeros (3, 100);
console.log(´La suma de los numeros es ${sumaDenumeros}´)