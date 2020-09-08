export default class Vehiculo {
    matricula = ""
    color = ""
    modelo = ""
    pagoImpuestos = [10,87,2,4]
    ciudadesVisitadas = {Medellín:false, Bogotá:true, Cartagena:false}
    constructor(x, y, z) {
        this.matricula = x
        this.color = y
        this.modelo = z
    }

frenar(){
    console.log(`El auto con matricula ${this.matricula} está frenando`)
}

esValidoUsarlo(){
    //let respuesta = this.modelo < 2000?"En desuso" : "Habilitado para usar"
    
    /*if(this.modelo < 2000)
    respuesta = "En desuso"
    else
    respuesta = "Habilitado para usar"*/
    
    return this.modelo < 2000?"En desuso" : "Habilitado para usar"
}

//esValidoUsarlo =() => this.modelo < 2000?"En desuso" : "Habilitado para usar"
}

/*let BMW = new Vehiculo("PO90Q", "Rojo", "2000");
var XX = new Vehiculo("RW23", "Verde");
//BMW.color = "Rojo"
//BMW.matricula = "PO90Q"
//process.stdin.on('data',cb)
//XX.modelo = "Ferrari"
//XX.color = "Azul"
//console.log(BMW)
//console.log(XX)
BMW.frenar()
console.log(`La respuesta es: ${BMW.esValidoUsarlo()}`)
BMW.esValidoUsarlo()*/