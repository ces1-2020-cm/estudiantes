
class vehiculo{
matricula = ""
color = ""
modelo = ""
pagoimpuestos = [10, 87, 2, 4,]
Ciudadesvisitadas = {Medellin:false, bogota:true, cartagena:false}
constructor(x, y, z){ 
     this.matricula = x
     this.color = y
     this.modelo = z
}
 frenar(){
     console.log("El auto con matriula ${This.matricula} esta frenando")
 }

esValidoUsarlo(){
let.respuesta = ""
/*if (this.modelo < 2000)
     respuesta = "desuso"
     else
     respuesta = "habilitado para usar"
     return respuesta 
     */
}

}
/*
let BMW = new vehiculo("EKN 780", "blanco", "2004") ;
var XX = new vehiculo("RWF 238", "negro") ;
//BMW.color = "rojo"
//BMW.matricula = "EKN 780"
//XX.modelo = "ferrari"
//XX.color = "azul"
//console.log(BMW)
//console.log(XX)
BMW.frenar()
console.log("La respuesta es:")
BMW.esValidoUsarlo
*/


