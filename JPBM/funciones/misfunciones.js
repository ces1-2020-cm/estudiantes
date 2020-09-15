export const PI = 3.1416

export function numerosImpares(){
    for (let i = 1; i <= 100; i += 2) {
        console.log(i)
    }
}

function numerosPares(){
    let cont = 0;
    while (cont <= 100) {
        if (cont % 2 == 0) {
            console.log(cont);
        }
        //cont = cont + 1;
        cont++;
    }    
}

function sumarNumeros(n1, n2){
    let suma = 0;
    suma = n1 + n2;
    return suma;
}

function condicionalNumero() {
    var numero = 2;
    let numero1 = 1;
    const PI = 3.1416;
    let suma = numero + numero1

    if (suma >= 5) {
        console.log('La suma de ' + numero + ' y ' + numero1 + ' es ' + suma);
    } else {
        console.log(`La suma de ${numero} y ${numero1} es ${suma}`)
    }
}