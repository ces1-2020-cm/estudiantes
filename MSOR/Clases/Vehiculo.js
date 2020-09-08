export default class Vehiculo{
    matricula = ""
    color = ""
    modelo = ""
    pagoImpuestos = [10,87,2,4]
    ciudadesVisitadas = {medellin:false,bogota:true,cartagena:false}
    constructor(x, y, z){
        this.matricula = x
        this.color = y
        this.modelo = z
    }
    
    frenar(){
        console.log(`El auto con matricula ${this.matricula} esta frenando`);
    }
    
    esValidoUsarlo(){
        //let respuesta = this.modelo < 2000?"En desuso":"Habilitado para usar"
        /*
        if(this.modelo < 2000)
            respuesta = "En desuso"
        else
            respuesta = "Habilitado para usar"
         */
        return this.modelo < 2000?"En desuso":"Habilitado para usar"
    }
    
  //  esValidoUsarlo = () => this.modelo < 2000?"En desuso":"Habilitado para usar"
}

/*
let BMW = new Vehiculo("PO90Q", "rojo", "2000") ;
var XX = new Vehiculo("RW23", "Verde");
//BMW.color = "rojo"
//BMW.matricula = "PO90Q"
//XX.modelo = "ferrari"
//XX.color = "azul"
//console.log(BMW)
//console.log(XX)
BMW.frenar()
console.log(`La respuesta es: ${BMW.esValidoUsarlo()}`)
*/
