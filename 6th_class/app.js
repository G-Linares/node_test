// entra la modularidad y llamo a mi modulo nuevo
let miobjetotareas= require('./funcionesDeTareas');
let escribirJSON = require('./tareas.js');

let accion = process.argv[2];

// cacho el argumento y lo convierto en string y luego en un objeto
let nuevaTarea = process.argv.slice(3);
let nuevaTareaObj = [{
    titulo: nuevaTarea.join(' '),
    estado: "en progreso"
}];

//checo posibles opciones de argumento en linea de comando
switch(accion){
    case undefined:
        console.log("Atencion -Tienes que pasar una accion");
        break;

    case 'listar':
        miobjetotareas.forEach(function(unatarea, index){
            console.log((index + 1) + ' '+ unatarea.titulo + '   -   ' +unatarea.estado);
        });
        break;
    
    case 'crear':

        let objetofinal = [...miobjetotareas, ...nuevaTareaObj];
        escribirJSON(objetofinal);
        break;

    default:
        console.log("No entiendo que quieres hacer");
        break;
}    

