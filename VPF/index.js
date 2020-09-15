<<<<<<< HEAD
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
        cont = cont + 1;
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
    console.log("Hola");
  }
}
 console.log('////////////impares//////////')
 numerosImpares();

 console.log('////////////pares//////////')
 numerosPares(); 

 let sumaDenumeros = sumar(3,100);
 console.log(sumaDenumeros);
=======
const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('hola mundo')
    
})

app.get('/valentina', (req, res) => {
    res.send( `<h1>hola valentina</h1> 
              <h2>saludos de express</h2>`)

})

app.get('/estudiantes/:numero_estudiantes', (req, res) =>{
    console.log("el paramero numero_estudiantes es", req.params)
    res.json({numero_estudiantes:req.params.numero_estudiantes})

})

app.get("/fibonacci/:run")

app.get('/json', (req, res) => {
    res.json({nombre: "valentina", edad:"17"})
})

app.listen(5057, function(){
    console.log("servidor esta en uso")
})
>>>>>>> 1d7dcf84b81ad11a0f73d0be6c34febd6c7e2308
