const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hola, Concejo de Medellin')
})

app.get('/enmanuel', (req, res) =>{
    res.send
})

app.listen(5057, function () {
    console.log("Servidor corriendo en el puerto 5057")
})
function fibonacci(numero){
    let a= 0, b= 1, c, s= 1;
    console.log(a,b);
    for(i = 3; i<=numero; i++){
        c=a+b;
        console.log(c);
        s = s+c;
        a = b;
        b = c;
    }
}
fibonacci(prompt());