//se llama al modulo
let fs = require('fs');
//se asigna el valor del JSON a Datos
let datos = fs.readFileSync(__dirname + '/tareas.json','utf-8');
// crea el String
let datosOrigi = JSON.stringify(JSON.parse(datos),null,2);
// crea los datos en Objeto Literal
//let datosOrigi = JSON.parse(datos);
// toma el argumento de terminal de comandos
let accion = process.argv[2];

switch(accion){
    case undefined:
        console.log("Atencion -Tienes que pasar una accion");
        break;

    case 'listar':
        console.log(datosOrigi);
        break;

    default:
        console.log("No entiendo que quieres hacer");
        break;
}    


