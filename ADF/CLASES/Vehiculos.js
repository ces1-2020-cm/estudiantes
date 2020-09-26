class Vehiculo{
    matricula = ""
    color = ""
    modelo = ""
    PagoImpuestos = [10, 90, 87, 3]
    ciudadesVisitadas = {medellin:false, bogota:true,cartagena:false}

    constructor(x, y ,z){
        this.matricula = x
        this.color = y
        this.modelo = z
    }
    frenar(){
        console.log("El auto con matricula "+this.matricula+" Esta frenando")
    }
    esValidoUsar(){
        let respuesta = this.modelo < 2000?"En desuso":"Habilitado para usar"
        /*
        if (this.modelo < 2000) 
            respuesta = "En desuso"

        else
            respuesta = "habilitado para usar"  
*/
        return respuesta
    }
}

let BMW = new Vehiculo("PO90Q", "rojo", "2020");
var XX = new Vehiculo();

//BMW.color = "Rojo"
//BMW.matriula = "PO90Q"
//XX.modelo = "Ferrari"
//XX.color = "Negro"

//console.log(BMW)
//console.log(XX)