export default class Vehiculo {  //clases
    matricula = ''
    color = ''
    modelo = ''
    pagoImpuestos = [10,90,3,4,'Jerson es mero lindo']
    ciudadesVisitadas = {
        medellin: false,
        bogota: true,
        cartagena:false
    };
    constructor(x, y, z){ //constructor
        this.matricula = x
        this.color = y
        this.modelo = z
        
    }
    frenar(){
        console.log('El auto con matricula ' + this.matricula + ' está frenando');
    } 

    esValidoUsarlo(){
        // let respuesta = this.modelo < 2000? "En desuso":"Habilitado para usar"
       /*  if(this.modelo < 2000){
            respuesta = 'En desuso';
        } else {
            respuesta = 'Habilitado para usar'; 
            return respuesta; */
            return respuesta = this.modelo < 2000? "En desuso":"Habilitado para usar"
        }
        // esValidoUsarlo = () => this.modelo < 2000?"En desuso":"Habilitado para usar"
    }


/* let bmw = new Vehiculo('PO90Q', 'rojo', '1989'); //objetos
var xx = new Vehiculo('RW23', 'verde');
//bmw.color = "rojo";
//bmw.matricula = "PO90Q";
//xx.modelo = "ferrari";
//xx.color = "azul";
//console.log(bmw);
//console.log(xx);
bmw.frenar()
console.log(`La respuesta es: ${bmw.esValidoUsarlo()}`) */
