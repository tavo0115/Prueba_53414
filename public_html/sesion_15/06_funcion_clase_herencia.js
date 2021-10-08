process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

function Animal (nombre, especie){
    let nuevoAnimal = Object.create(constructorAnimal);
    nuevoAnimal.nombre = nombre;
    nuevoAnimal.especie = especie;
    return nuevoAnimal;
}

let constructorAnimal = {
    cantar : function(){
        return this.nombre + ' puede cantar';
    },
    bailar : function(){
        return this.nombre + ' puede bailar';
    }
}

function Gato (nombre, especie, color){
    let nuevoGato = Animal(nombre, especie);
    Object.setPrototypeOf(nuevoGato, constructorGato);
    nuevoGato.color = color;
    return nuevoGato;
}

let constructorGato = {
    descripcion : function(){
        return `El gato ${this.nombre} es un ${this.especie} de color ${this.color}`;
    }
}


let animal = new Animal('Copito','Persa Exotico');
console.log(animal.cantar());

Object.setPrototypeOf(constructorGato, constructorAnimal);
let gato = new Gato('Copito','Persa Exotico', 'Blanco');
console.log(gato.cantar());
console.log(gato.descripcion());
