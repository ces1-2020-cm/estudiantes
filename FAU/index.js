const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hola mundo');
});
name = "Felipe";
app.listen(5057, function(){
    console.log("El servidor está en uso.");
});

app.get('/felipe', (req,res) => {
    res.send(`hola ${name}`);
});

app.get('/json', (req,res) => {
    res.send(`<h1>Hola señor ${name} ¿cómo se encuentra?</h1>.json`);
});

app.get('/estudiantes/:numero_estudiantes', (req,res)=>{
    console.log("El parametro numero_estudiantes es", req.params.numero_estudiantes )
res.json({numero_estudiantes:10})
})
app.get("/fibonacci/:num", (req, res,) => {
var limit = 10;
	var Fib_total = [0,1];

	for(i=2; i <= limit; i++){
		fibo.push(Fib_total[i-1] + Fib_total[i-2]);
		document.write(Fib_total[i]+"<br/>");	
    }
    console.log(`La fibonacci es: ${fibo}`);
    res.send({Fib_total:100});
})

/*  Sucesión Fibonacci  */

//let fibo_final = fibo_total;
//app.get("/fibonacci/:num", (req, res,fibo_total) => {

  /*  let fibo_origin = [0,1];
    let fibonacci = function(fibo_total){
      let fibo_final = fibo_origin[fibo_final];
    
    if (typeof fibo_final != 'number') {
    
        fibo_final = fibonacci(n - 1) + fibonacci(n - 2);
        
        fibo_origin[fibo_total] = fibo_final;
    
        return fibo_final;
    }
    console.log(fibonacci(250));
    };
    
     EN PROCESO.
console.log(fibonacci(250));
console.log(`El número ${fibo_total} pertenece a la secuencia Fibonacci:`, req.params.secuencia_fibo)

res.json({fibo_origin});*/