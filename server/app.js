const rutas = require('./rutas')
const express = require('express');

const app = express();

const port = 4000;

const greeting = (" "
);

app.get('/', (req, res) => {
res.send();
});
app.use("/",rutas)

app.listen(port,(req, res) => {
console.log(greeting);
    console.log(`Listen in port ${port}`);
});