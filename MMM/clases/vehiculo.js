class vehiculo{
    matricula = ""
    color=""
    modelo=""
constructor(x, y, z){
this.matricula= x
this.color = y
this.modelo = z
}
}
let bmw = new vehiculo("PO90Q", "rojo", "2002");
var xx= new vehiculo("RWJE", "verde");
//bmw.color="rojo"
//bmw.matricula="PO90Q"
xx.modelo="ferrari"
//xx.color="azul"
console.log(bmw)
console.log(xx)

