// entra la modularidad y llamo a mi modulo nuevo

let mimodulo = require('./funcionesDeTareas');

// encunetro argumento en linea de comando
let accion = process.argv[2];

//checo posibles opciones de argumento en linea de comando
switch(accion){
    case undefined:
        console.log("Atencion -Tienes que pasar una accion");
        break;

    case 'listar':
        //se imprime como objeto por que en string se ve feo
        //console.log(JSON.stringify(mimodulo["datos"]));
        console.log(mimodulo["datos"]);
        break;

    default:
        console.log("No entiendo que quieres hacer");
        break;
}    


