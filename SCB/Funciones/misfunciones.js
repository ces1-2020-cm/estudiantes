export const PI = 3.1416

function numerosImpares(){
    for(i = 1; i <= 100; i += 2){
        console.log(i)
    }
}

function numerosPares(){
    let cont = 0;
    while(cont <= 100){
        if(cont%2 == 0){
            console.log(cont);
        }
        cont = cont +1; 
    }
    
}

function sumarNumero(n1, n2){
    let suma=0;
    suma = n1 + n2;
    return suma;
}

function condicionalNumero(){
    
    
}