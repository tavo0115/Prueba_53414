process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

class Animal{
    
    constructor(nombre, especie){
        this.nombre = nombre;
        this.especie = especie;
    }
    
    cantar(){
        return this.nombre + ' puede cantar';
    }
    
    bailar(){
        return this.nombre + ' puede bailar';
    }
    
}

let animal = new Animal('Yako','Perro');

console.log(animal);
console.log(animal.cantar());
console.log(animal.bailar());
