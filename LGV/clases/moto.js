import vehiculo from './vehiculo'
export default class moto extends vehiculo{
    torque = 0
    clindraje=0

    constructor(torque, cilindraje){
        this.torque= torque
        super()
        this.cilindraje = cilindraje
    }

    esDeAltoCilindraje(){
        return this.cilindraje >= 300? true:false
    }
}