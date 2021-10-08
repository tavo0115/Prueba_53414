process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

function Perro (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

Perro.prototype.descripcion = function(){
    return 'El perro ' +perro.nombre+ ' tiene ' + perro.edad + ' años de edad' ;
};

let perro = new Perro('Yako', 3);

console.log(perro.descripcion());
