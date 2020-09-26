import vehiculo from "./vehiculo.js"
import Vehiculo from "./vehiculo.js"
export default class Moto extends Vehiculo{
    torque = 0
    cilindraje = 0

    constructor(torque, cilindraje){
        super()
        this.torque = torque
        this.cilindraje = cilindraje
    }

    esDeAltoCilindraje() {
        return this.cilindraje >= 300 ? true : false
    }
}