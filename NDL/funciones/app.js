<<<<<<< HEAD
const nImpares = ()=>{
    for(let i = 0; i<100 ;i++){
        if(i%2!=0) console.log(i);
    }
}

const nPares = ()=>{
    for(let i = 0; i<100 ;i++){
        if(i%2==0) console.log(i);
    }
}

const Suma = (n,n2) => n+n2;

const nCondicionales = (n,n2)=>{
    if(Suma(n,n2)>5)
        console.log('La suma es mayor a 5');
    else
        console.log('La suma es menor a 5');
}

console.log('#####  Numeros Impares  #####');
nImpares();
console.log('#####  Numeros Pares  #####');
nPares();
console.log('#####  Suma de los Numeros  #####');
=======
export const nImpares = ()=>{
    for(let i = 0; i<100 ;i++){
        if(i%2!=0) console.log(i);
    }
}

export const pi = 3.1416;

export const nPares = ()=>{
    for(let i = 0; i<100 ;i++){
        if(i%2==0) console.log(i);
    }
}

export const Suma = (n,n2) => n+n2;

export const nCondicionales = (n,n2)=>{
    if(Suma(n,n2)>5)
        console.log('La suma es mayor a 5');
    else
        console.log('La suma es menor a 5');
}

console.log('#####  Numeros Impares  #####');
nImpares();
console.log('#####  Numeros Pares  #####');
nPares();
console.log('#####  Suma de los Numeros  #####');
>>>>>>> 1d7dcf84b81ad11a0f73d0be6c34febd6c7e2308
console.log(`${5}+${1}=${Suma(5,1)}`)