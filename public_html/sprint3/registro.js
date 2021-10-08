/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let registros = [];

function agregarRegistro() {
    //AGREGAR VALIDACIONES
    //alert(registros.length);
    let registro = new Object();
    registro.in_usuario = document.getElementById('in_usuario').value;
    registro.in_contrasena = document.getElementById('in_contrasena').value;
    registros.push(registro);
    //alert(registros.length);
}

function filtrarPorContrasena(arreglo, filtro) {
    //Opción 1
    var resultado = arreglo.filter(
            (a) => a.in_contrasena.length <= filtro
    );
    alert(resultado.length);
    //Opción 2
    var resultado = [];
    for(let obj of arreglo){
        if(obj.in_contrasena.length <= filtro){
            resultado.push(obj);
        }
    }
    alert(resultado.length);
    //Retornar
    return resultado;
}

