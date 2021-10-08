process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

for(let i = 0 ; i < 10; i++){
    console.log("Val: " + i)
}

var vector = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto'];
for(let pos in vector){
    console.log(vector[pos]);
}

var cadena = 'abcdefghijklmnopqrstuvwxyz';
var caracteres = cadena.split("");
for(let pos in caracteres){
    console.log(caracteres[pos]);
}

for(let pos in cadena){
    console.log(cadena[pos]);
}

for(let obj in cadena){
    console.log(obj);
}

var cadena = 'abcdefghijklmnopqrstuvwxyz';
var caracteres = cadena.split("");
caracteres.forEach(
    element => console.log(element)
);

var i = 0;
while(i <= 10){
    console.log(i);
    i++;
}

var vector = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto'];

var i = 0;
while(i < vector.length){
    console.log(vector[i]);
    i++;
}

var vector = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto'];
var i = 0;
do{
    console.log(vector[i]);
    i++;
}while(i < 0);

