//invoco modulo de fs
let fs = require('fs');
//leo los arichivos de JSON
let datos = fs.readFileSync(__dirname + '/tareas.json','utf-8');
// crea el String pero no lo ocupo
let datosOrigi = JSON.stringify(JSON.parse(datos),null,2);
// exporto datos (sale como objeto)
module.exports = {datos};