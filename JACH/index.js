
const express = require ('express')
const app = express() 

app.get('/fibonacci', function(req, res) {
    res.send('<h1>FIBONACCI (Julian Cruz)</h1>')
})

// app.get('/julian', (req, res) => {
//     res.send('<h1><i>Hola julián</i></h1>')
// })

// app.get('/json', (req, res) => {
//     res.json({nombre:"julian",edad:16})
// })

// app.get('/estudiantes/:numero_estudiantes', (req, res) => {
//     console.log("El parametro numero_estudaintes es ", req.parans.numero_estudiantes)
//     res.json({numero_estudiantes:18})
// })


app.listen(5055, function(){
    console.log("Servidor corriendo en el puerto 5055")
}) 

