/process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

var persona = {
    nombre : {
        primero : 'Raúl',
        segundo : 'Ignacio'
    },
    apellido : {
        primero : 'Palacios',
        segundo : 'Correa'
    },
    edad : 39,
    genero : 'Masculino',
    nombreCompleto : function(){
        return persona.nombre.primero + ' ' + persona.nombre.segundo + ' ' + persona['apellido']['primero'] + ' ' + persona['apellido']['segundo'];
    },
    imprimirNombreCompleto : function(){
        console.log(persona.nombre.primero + ' ' + persona.nombre.segundo + ' ' + persona['apellido']['primero'] + ' ' + persona['apellido']['segundo']);
    },
    cambiarNombre : function(nombre){
        persona.nombre.primero = nombre;
    }
}

console.log(persona.nombreCompleto());
persona.cambiarNombre('Carlos');
persona['nombre'].segundo = 'Antonio';
persona.imprimirNombreCompleto();

persona.estatura = 170;
console.log(persona.estatura);