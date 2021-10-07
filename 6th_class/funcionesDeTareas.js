// se lee el archivo y se hace obejeto

const fs = require('fs');

let tareas = fs.readFileSync('./tareas.json', 'utf-8');

tareas = JSON.parse(tareas);

// escribir en el JSON

module.exports = tareas;

