 export  default class Vehiculo{
    matricula = "";
    color = "";
    modelo = "";
    pagoImpuestos = [10,87,6,4,"texto"]
    ciudadesVisitadas = {Medellin: false, Bogotá: true, Cartagena: false }
    constructor(x, y, z){
        this.matricula = x
        this.color = y
        this.modelo = z
    }

    frenar(){
        console.log("El auto con matrícula "+this.matricula+" está frenando")
    }

    esValidoUsarlo(){
        let respuesta = this.modelo < 2000 ? "En desuso" : "Habilitado para usar"
      /*  if(this.modelo <2000)
        respuesta = "En desuso"
        else 
        respuesta = "Habilitado para usar"
        return respuesta */
        }
}
/*
let BMW = new Vehiculo("MDK546", "gris", "1990");
var XX = new Vehiculo("GPM190");
//BMW.color = "gris";
//BMW.matricula = "MDK546"
//XX.modelo = 2010;
//XX.color = "gris";
//console.log(BMW);
//console.log(XX);
BMW.frenar()
console.log(`La respuesta es: ${BMW.esValidoUsarlo()}`)
BMW.esValidoUsarlo()
*/