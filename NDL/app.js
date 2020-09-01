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
console.log(`${5}+${1}=${Suma(5,1)}`)