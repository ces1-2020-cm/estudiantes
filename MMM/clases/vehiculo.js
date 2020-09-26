export default class vehiculo { 
    matricula = ''
    color = ''
    modelo = ''
    pagoImpuestos = [10,90,3,4,'hols']
    ciudadesVisitadas = {
        medellin: false,
        bogota: true,
        cartagena:false
    };
    constructor(x, y, z){ 
        this.matricula = x
        this.color = y
        this.modelo = z
        
    }
    frenar(){
        console.log('El auto con matricula ' + this.matricula + ' está frenando');
    } 

    esValidoUsarlo(){
        let respuesta = this.modelo < 2000? "En desuso":"Habilitado para usar"
      /*   if(this.modelo < 2000){
            respuesta = 'En desuso';
        } else {
            respuesta = 'Habilitado para usar'; */
            return respuesta;
        }
    }


let bmw = new vehiculo('PO90Q', 'rojo', '1989'); //objetos
var xx = new vehiculo('RW23', 'verde');
//bmw.color = "rojo";
//bmw.matricula = "PO90Q";
//xx.modelo = "ferrari";
//xx.color = "azul";
//console.log(bmw);
//console.log(xx);
bmw.frenar()
console.log(`La respuesta es: ${bmw.esValidoUsarlo()}`)