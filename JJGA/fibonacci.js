const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hola mundo');
});

app.listen(5057, function(){
    console.log("El servidor se encuentra en uso.");
});

app.get('/juan', (req,res) => {
    res.send(`hola <3 Wglop <3`);
});

app.get('/json', (req,res) => {
    res.send(`<h1> Hola <3 Wglop <3 </h1>`);
});

app.get('/estudiantes/:Fibona', (req,res)=>{
function fibonacci(){
	var x = 0;
	var valor = document.getElementById('num').value;
	var arreglo = [];
	valor = parseInt(valor);
	for (x; x<valor; x++){
		if(x==0){
			arreglo.push(0);
		}
		else if(x==1){
			arreglo.push(1);
		}
		else{
			arreglo.push(arreglo[x-1]+arreglo[x-2]);
		}
	}
	res.send().json(arreglo)
}
})