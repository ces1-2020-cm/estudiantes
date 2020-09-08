const express = require('express');
const app = express();
app.get('/', function(req,res){
    res.send('Hola mundo');
    console.log(res);
});

app,Listen(5057, function(){
    console.log("El servidor está en uso.");
});
