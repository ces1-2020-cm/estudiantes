export default class vehiculo{
    matricula = ""
    color = ""
    modelo = ""
    PagoImpuestos =[10,68,3,6, "texto"]
    ciudadesVisitadas = {medellin:false,bogota:true,cartagena:50}
    constructor(x, y, z){
        this.matricula = x
        this.color = y
        this.modelo = z
    }

    frenar(){
        console.log("el auto con matricula"+this.matricula+"esta frenando")
    }

    esValidoUsarlo(){
        let respuesta = this.modelo < 2000?"en desuso":"habilitado para usar"
        /* if (this.modelo < 2000)
        respuesta = "en desuso"
        else 
        respuesta = "habilitado para usar"
        return = respuesta */
    }

}

/* let BMW = new vehiculo("MTO459", "rojo", "2020");
var XX = new vehiculo();
//BMW.color = "rojo"
//BMW.matricula = "MTO459"
// XX.modelo = "ferrari"
// XX.color = "negro"
// console.log(BMW)
// console.log(XX)
BMW.frenar()
console.log(`la respuesta es: ${BMW.esValidoUsarlo()}`)
BMW.esValidoUsarlo() */