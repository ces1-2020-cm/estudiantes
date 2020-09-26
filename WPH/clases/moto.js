import vehiculo from "./vehiculo.js"
export default class moto extends vehiculo{
    torque = 0
    cilindraje =0
    
    constructor(torque, cilindraje){
       super()
        this.torque = torque
        this.cilindraje = cilindraje
    }

    esDeAltoCilindraje(){
        return this.cilindraje >= 300? true : false
    }
}