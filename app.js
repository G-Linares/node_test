//modulo de Node
let fs = require('fs');

//can't call moment Module, I don't have the .JSON
//let moment = require('moment');

//modulo propio
let mimodulo = require('./comida');

//asignamos el metodo readFile del modulo de Node
let datos = fs.readFileSync(__dirname + '/test.txt','utf-8');

//imprime el texto gracias al metodo de readFileSync
console.log(datos);

//console.log(moment().format('MMM Do YY'));

//imprime todo lo que contiene mi modulo
console.log("\n");
console.log(mimodulo);
console.log("\n");

//imprime el color del segundo elemento del Array exportado
console.log(mimodulo[1].color);

//imprime el resultado de la funcion del elemento 0 de mi Array
console.log(mimodulo[0].ordenar());
