const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send("<h1>Hola Concejo de Medellín!!</h1>")
});

app.get('/Valeria', (req, res) => {
    res.send("Hola Valeria!!")
})

app.get('/json', (req, res) => {
    res.json({ Nombre: "Valeria", Edad: "17 D:" })
})

app.get('/estudiantes/:id_estudiantes', (req, res) => {
    console.log("El parámetro id_estudiantes es: ", req.params.id_estudiantes)
    res.json({ id_estudiantes: req.params.id_estudiantes })
})

app.get("/fibonacci", (req, res) => {

    var numero1 = parseInt(prompt("Ingrese el primer número"));
    var numero2 = parseInt(prompt("Ingrese el segundo número"));

    var array = [numero1, numero2];
    
    function fibonacci(i) {

        for (var i = 0; i <= 100; i++) {
            var newnumero = numero1 + numero2;
            array.push(newnumero);
            numero1 = numero2;
            numero2 = newnumero;

            for (x of array) {
                document.write(x + "<br>");
            }
        }
    }
    res.json(fibonacci(10))
})


app.listen(5057, function () {
    console.log("El servidor está activo en el puerto 5057 bebé")

});