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

app.get("/fibonacci", (req, res) => {
    function fibo(num) {
        if(num == 0) {
          return 0;
        } else if(num == 1) {
          return 1;
        } else {
          return fibo(num-1) + fibo(num-2);
        }
      }
        
        res.send(fibonacci(30));
        
})

app.get('/json', (req, res) => {
    res.json({nombre: "valentina", edad:"17"})
})

app.listen(5057, function(){
    console.log("servidor esta en uso")
})