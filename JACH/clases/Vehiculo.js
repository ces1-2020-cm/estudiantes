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
        console.log(`El auto con matriculo ${this.matricula} esta frenando`);
    }

    esValidoUsuario(){
        // let respuesta = this.modelo < 2000? "en desuso":"Habilitado para usar"
        /* 
        if(this.modelo < 2000)
          respuesta = "En desuso"
        else
          respuesta = "Habilitado para usar"
          */
        return this.modelo < 2000?"en desuso":"Habilitado para usar"

        //esValidoUsuario = () => this.modelo < 2000?"en desuso":"Habilitado para usar"
    }
}
/*
let BMW = new Vehiculo("PO90Q", "Azul", "2002") ;
var XX = new Vehiculo("RW23") ;
// BMW.color = "Azul"
// BMW.matricula = "PO90Q"
// XX.modelo = "ferrari"
// XX.color = "rojo"
// console.log(BMW)
// console.log(XX)
BMW.frenar()
console.log(`La respues es: ${BMW.esValidoUsuario()}`)
 */