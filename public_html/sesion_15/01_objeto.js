process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

let nombres = {
    nombre: 'Raúl',
    apellido: 'Palacios',
    toString : function(){
        return 'nombre: ' +this.nombre+ ', apellido: ' + this.apellido ;
    }
}

console.log(nombres);
console.log(nombres.nombre);
console.log(nombres.hasOwnProperty('nombre'));
console.log(nombres.toString());
console.log(nombres.propertyIsEnumerable('apellido'));