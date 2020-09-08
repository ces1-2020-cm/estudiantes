import Vehiculo from './Vehiculo.js'
export default Class Moto extends Vehiculo{

    Placa = PLM22
    Torque = 0
    Cilindraje = 0

    constructor(Torque, Cilindraje){
        super()
        this.Torque = Torque
        this.Cilindraje = Cilindraje
    }

    AltoCilindraje(){
        return this.Cilindraje >= 300 ? true : false
    }

}