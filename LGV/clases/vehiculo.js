export default class vehiculo { 
    matricula = ''
    color = ''
    modelo = ''
    pagoImpuestos = [10,90,3,4,'hols']
    ciudadesVisitadas = {
        medellin: false,
        bogota: true,
        cali:false
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
        let respuesta = this.modelo < 1299? "En desuso":"Habilitado para usar"
   
            return respuesta;
        }
    }


let ferrari = new vehiculo('WI90k', 'roja', '488 GtB');
var bmw = new vehiculo('KZ46', 'azul');

bmw.frenar()
console.log(`La respuesta es: ${bmw.esValidoUsarlo()}`)