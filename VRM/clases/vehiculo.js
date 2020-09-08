class vehiculo{
    matricula = ""
    color = ""
    modelo = ""
    constructor(x, y, z){
        this.matricula = x
        this.color = y
        this.modelo = z
    }

}

let BMW = new vehiculo("MTO459", "rojo", "2020");
var XX = new vehiculo();
//BMW.color = "rojo"
//BMW.matricula = "MTO459"
XX.modelo = "ferrari"
XX.color = "negro"
console.log(BMW)
console.log(XX)
