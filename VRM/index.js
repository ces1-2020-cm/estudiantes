function numerosImpares(){
    for (i = 1; i <= 100; i += 2) {
        console.log(i);
      }
}

function numerosPares() {
    let cont =0;
    while (cont <= 100) {
        if (cont % 2 == 0) {
          console.log(cont);
        }
        cont++;
        //cont = cont + 1;
      }
}


function sumar(a,b){
    let suma;
    suma = a+b;
    return suma;
}

function condicionalNumero() {
  var numero = 2;
  let numero1 = 1;
  const PI = 3.1416;
  let cont = 0;
  let suma = numero + numero1;

  if (suma >= 5) {
    console.log("la suma es mayor o igual a 5");
  } else {
    console.log("perro feo");
  }
}
/*  console.log('////////////impares//////////')
 numerosImpares();

 console.log('////////////impares//////////')
 numerosPares(); */

 let sumaDenumeros = sumar(3,100);
 console.log(sumaDenumeros);
