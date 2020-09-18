const express = require('express')
const app = express()

app.get('/', function(req, res) {

    res.send(`Hola Mundo Concejo de Medellín !!! $`);
});

app.get('/juan', (req, res) => {
    res.send(`<h1>Seré profesional y ganaré mucha plata<h1>
    <h2>lo juro por diosito<h2`);
});

app.get('/json', (req, res)=> {
    res.json({
        nombre: "Juan",
        edad: 17
    });
});

app.get('/estudiantes/:numero_estudiantes', (req, res)=>{
    console.log('El parametro numero_estudiantes es ', req.params.numero_estudiantes);
    res.json({
        numero_estudiantes: req.params.numero_estudiantes
    });
});
// TAREAAA ///////////////////////////
 app.get("/tarea_fibonacci/:limite", (req, res) => {
    function tareaFibonacci(limite)
    {
        let array;
        array =[0,1];
        for (let i = 2; i < limite; i++) 
        {
            array[i] = array[i - 2] + 
            array[i - 1];
        }
        return array;
    }
    res.json(`La serie de fibonacci es:
     ${tareaFibonacci(req.params.limite)}`)
        
}) 

 // EJEMPLO FUNCIONAL EN JS PERO NO EJECUTA POR EL res.send
/* app.get('/fibonacci/', (req, res)=>{
    let a,b,result;
    a=0;
    b=1;
    result = b;
    for(let i = 1; i <100; i++){
        res.send(result)
        result = a+b;
        a=b;
        b = result;
    }
}); */
//////////////////////////////////////

app.listen(5057, function(){
    console.log("Servidor corriendo en el puerto 5057")
});  
