// entra la modularidad y llamo a mi modulo nuevo

const tareasFunc = require('./funcionesDeTareas');


// encunetro argumento en linea de comando
let accion = process.argv[2];

let tareas = tareasFunc.leerArchivo();



//checo posibles opciones de argumento en linea de comando
switch(accion){
    case undefined:
        console.log("Atencion -Tienes que pasar una accion");
        break;

    case 'listar':
        tareas.forEach(function(unatarea, index){
            console.log(`${index + 1}.- La tarea: ${unatarea.titulo}.   Se encuentra es estado --> ${unatarea.estado}`);
        });

        break;

    case 'crear':
        const nuevaTarea = {
            titulo: process.argv[3],
            estado: 'pendiente'
        };
        tareasFunc.guardarTarea(nuevaTarea);
        break;
    
    case 'filtrar':
        let parametro = process.argv[3];
        tareasFunc.filtrarPorEstado(tareas, parametro);
        break;

    default:
        console.log("No entiendo que quieres hacer");
        break;
}    


