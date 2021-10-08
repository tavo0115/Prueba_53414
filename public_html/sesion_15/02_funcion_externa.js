process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

function Perro (nombre, edad){
    let perro = Object.create(contructorPerro);
    perro.nombre = nombre;
    perro.edad = edad;
    return perro;
}

let contructorPerro = {
    descripcion : function(){
        return 'El perro ' +perro.nombre+ ' tiene ' + perro.edad + ' años de edad' ;
    }
}

let perro = new Perro('Yako', 3);

console.log(perro.descripcion());