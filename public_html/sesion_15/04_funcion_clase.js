process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!
function Animal (nombre, especie){
    this.nombre = nombre;
    this.especie = especie;
}

Animal.prototype.cantar = function(){
    return this.nombre + ' puede cantar';
};

Animal.prototype.bailar = function(){
    return this.nombre + ' puede bailar';
};

let animal = new Animal('Yako','Perro');

console.log(animal);
console.log(animal.cantar());
console.log(animal.bailar());