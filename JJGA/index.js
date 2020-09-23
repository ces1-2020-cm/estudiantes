const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hola mundo');
});
app.listen(5057, function(){
    console.log("El servidor está en uso.");
});

app.get('/felipe', (req,res) => {
    res.send(`hola <3 Wglop <3`);
});

app.get('/json', (req,res) => {
    res.send(`<h1>Hola señor Juan josé</h1>`);
});

app.get('/estudiantes/:numero_estudiantes', (req,res)=>{
    console.log("El parametro numero_estudiantes es", req.params.numero_estudiantes )
res.json({numero_estudiantes:10})
})
/*app.get("/fibonacci/:num", (req, res,) => {
var limit = 10;
	var Fib_total = [0,1];

	for(i=2; i <= limit; i++){
		fibo.push(Fib_total[i-1] + Fib_total[i-2]);
		document.write(Fib_total[i]+"<br/>");	
    }
    console.log(`La fibonacci es: ${fibo}`);
    res.send({Fib_total:100});
})

**/