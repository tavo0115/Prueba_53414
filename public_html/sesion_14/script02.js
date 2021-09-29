process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

function Persona(nombre1, nombre2, apellido1, apellido2, edad, genero){
    this.nombre = {
        primero : nombre1,
        segundo : nombre2
    };
    this.apellido = {
        primero : apellido1,
        segundo : apellido2
    };
    this.edad = edad;
    this.genero =genero;
    this.nombreCompleto = function(){
        return this.nombre.primero + ' ' + this.nombre.segundo + ' ' + this['apellido']['primero'] + ' ' + this['apellido']['segundo'];
    },
    this.imprimirNombreCompleto = function(){
        console.log(this.nombre.primero + ' ' + this.nombre.segundo + ' ' + this['apellido']['primero'] + ' ' + this['apellido']['segundo']);
    },
    this.cambiarNombre = function(nombre){
        this.nombre.primero = nombre;
    }
}

var persona_01 = new Persona('Raúl', 'Ignacio', 'Palacios' , 'Correa', 39, 'Masculino');
persona_01.imprimirNombreCompleto();

var persona_02 = new Persona('Carlos', 'Enquique', 'Cardenas' , 'Rios', 25, 'Masculino');
persona_02.imprimirNombreCompleto();

