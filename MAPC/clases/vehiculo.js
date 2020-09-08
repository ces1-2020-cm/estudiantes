export default class Vehiculo{
    matricula = " "
    color = " "
    modelo = " "
    pagoImpuestos = [10,87,2,4]
    ciudadesVisitadas = {medelli:false,bogota:true,cartagena:false}
    constructor(x,y,z){
        this.matricula = x;
        this.color = y;
        this.modelo = z;
    }

frenar(){
console.log(`El auto con matricula ${this.matricula}Esta frenando`)
}

esValidoUsarlo(){
    let respuesta = this.modelo < 2000?"En desuso" : "Habilitado para usar"

    /*
    if (this.modelo < 2000)
    respuesta = "en desuso"
    else
    respuesta="Habilitado para usar"
*/
    return respuesta
}
}
/*
let BMW = new Vehiculo("PO90Q","rojo", "1987");
var xx = new Vehiculo("RW23", "azul");
//xx.modelo = "ferrari"
//xx.color = "azul"
//BMW.color = "rojo" `
//BMW.matricula = "PO90Q"
//console.log(BMW) < >
//console.log(xx)
BMW.frenar()
console.log(`La respuesta es: ${BMW.esValidoUsarlo}`)
*/
