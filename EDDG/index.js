function numImp(){
    for (i = 1; i <= 100; i += 2) {
        console.log(i)
    }
}

function numePar(){
    let contador = 0;
    while (contador <= 100) {
        if (contador % 2 == 0) {
            console.log(contador)
        }
        contador = contador + 1;
    }
}


function sumarNumeros(a1, a2){
    let sum = 0;
    sum = a1 + a2;
    return sum;
}

function condionalNumero() {
    var num = 2;
    let num1 = 1;
    const PI = 3.1416;
    let suma = num + num1;

    if (suma >= 5) {
        console.log("sum>=5");
    } else {
        console.log("sum<=5");
    }
}

console.log("Número Impares");
numImp();

console.log("Numeros Pares");
numPar();
let tosum = sumarNumeros(3,100);
console.log(`La suma de los números es ${sumaDenumeros}`);