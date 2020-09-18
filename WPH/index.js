const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send('Hola, concejo de medellin!!!!')
})

app.get('/wendy', (req, res) => {
    res.send(`<h1>Hola Wendy!!!</h1>`)
})

app.get('/json', (req, res) => {
    res.send({nombre: "Wendy",edad:17})
})


app.get('/fibonacci/:limite',(req,res) => {
    function fibonacci(nums) {
  
        let fib = [0, 1];
        let data = [0, 1];
        
        for(let i = 2; i <= nums; i++) {
          fib[i] = fib[i - 1] + fib[i - 2]; 
          data.push(fib[i]);
        }
        
        return data;
      }
    res.json(fibonacci(req.params.limite))
})


app.get('/estudiantes/:numero_estudiantes', (req, res) => {
    console.log("El parametro numero_estudiantes es:", req.param.numero_estudiantes)
    res.json({numero_estudiantes:req.param.numero_estudiantes})
})



app.listen(5057, function(){
    console.log("Servidor corriendo en el puerto 5057")
})
