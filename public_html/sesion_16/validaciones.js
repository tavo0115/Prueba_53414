process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

var i = 5;

if(i === 0){
    console.log('Cero');
}else if(i === 1){
    console.log('Uno');
}else if(i === 2){
    console.log('Dos');
}else if(i === 3){
    console.log('Tres');
}else if(i === 4){
    console.log('Cuatro');
}else if(i === 5){
    console.log('Cinco');
}else if(i === 6){
    console.log('Seis');
}else{
    console.log('Indefinido');
}

switch(i){
    case 0:
        console.log('Cero');
        break;
    case 1:
        console.log('Uno');
        break;
    case 2:
        console.log('Dos');
        break;
    case 3:
        console.log('Tres');
        break;
    case 4:
        console.log('Cuatro');
        break;
    case 5:
        console.log('Cinco');
        break;
    case 6:
        console.log('Seis');
        break;
    default:
        console.log('Indefinido');
        break;
}
