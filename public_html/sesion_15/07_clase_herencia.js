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

class Gato extends Animal{
    
    constructor(nombre, especie, color){
        super(nombre, especie);
        this.color = color;
    }
    
    descripcion(){
        return `El gato ${this.nombre} es un ${this.especie} de color ${this.color}`;
    }
    
}

let gato = new Gato('Copito','Persa Exotico', 'Blanco');

console.log(gato.descripcion());
console.log(gato.cantar());
console.log(gato.bailar());