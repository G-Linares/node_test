//invoco modulo de fs
let fs = require('fs');


function leerArchivo(){
    const archivo = fs.readFileSync('./tareas.json','utf-8');
    return JSON.parse(archivo);
}

function guardarArchivo(tareas){
    let tareasJSON = JSON.stringify(tareas);
    fs.writeFileSync('./tareas.json', tareasJSON);
}


function guardarTarea(tarea){
    let tareasActuales = leerArchivo();
    tareasActuales.push(tarea);
    guardarArchivo(tareasActuales);
}

function filtrarPorEstado(tareas, parametro){
    switch(parametro){
        case 'pendiente':
            for (let i = 0; i < tareas.length; i = i + 1) {
                if (tareas[i].estado == 'pendiente') {
                  console.log(tareas[i].titulo + ' se encuentra en estado: ' + tareas[i].estado);
                }
            }
            break;

        case'progreso':
            for (let i = 0; i < tareas.length; i = i + 1) {
                if (tareas[i].estado == 'progreso') {
                  console.log(tareas[i].titulo + ' se encuentra en estado: ' + tareas[i].estado);
                }
            }
            break;

        case'terminada':
            for (let i = 0; i < tareas.length; i = i + 1) {
                if (tareas[i].estado == 'terminada') {
                  console.log(tareas[i].titulo + ' se encuentra en estado: ' + tareas[i].estado);
                }
            }
            break;
    }
}

/*function filtrarPorEstado(estado){
    let tareasActuales = this.leerArchivo();
    const tareaFiltradas = tareasActuales.filter(function(unestado){
        return unestado === 'pendiente'
    }
}
*/

module.exports = {guardarTarea, leerArchivo, filtrarPorEstado};