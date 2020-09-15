var numero1 = parseInt(prompt("Ingrese el primer número"));
var numero2 = parseInt(prompt("Ingrese el segundo número"));
var array = [numero1, numero2];

for(var i= 0; i<=100; i++)
{
    var newnumero = numero1 + numero2;
    array.push(newnumero);
    numero1 = numero2;
    numero2 = newnumero;

}

    console.log (array);

    for(x of array)
    {
        document.write(x + "<br>");
    }