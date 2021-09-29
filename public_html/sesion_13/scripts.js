/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function alerta(entrada) {
    alert('HOLA MUNDO ' + entrada);
}

function capturar(){
    let form = document.formulario;
    alert(form.texto.value);
    alert(document.getElementById('texto').value);
    alert(document.querySelector('input').value);
    alert(document.querySelector('.claseTexto').value);
    alert(document.querySelector('#texto').value);
    for(let i=0 ; i < document.querySelectorAll('input').length ; i++){
        alert(document.querySelectorAll('input')[i].value);
    }    
}

function cambiar(){
    var elemento = document.getElementById('titulo');
    elemento.title = 'NO TITULO';
}

function validar(){
    var error = "";
    let form = document.formulario;
    if(form.texto.value.length === 0){
        error += "El elemento Texto es obligatorio \n";
    }
    if(form.fecha.value.length === 0){
        error += "El elemento Fecha es obligatorio \n";
    }
    if(form.hora.value.length === 0){
        error += "El elemento Hora es obligatorio \n";
    }
    if(error === ""){
        alert("Validación exitosa");
        return true;
    }else{
        alert(error);
        return false;
    }
    
}

function validarExpresion(){
    let form = document.formulario;
    var expresion = /\w{4,9}/;
    if(expresion.test(form.texto.value)){
        alert('Se cumple la expresión');
    }else{
        alert('No se cumple la expresión');
    }
}
