let fs = require('fs');

//can't call moment Module, I don't have the .JSON
//let moment = require('moment');

let mimodulo = require('./comida');

let datos = fs.readFileSync(__dirname + '/test.txt','utf-8');


console.log(datos);

//console.log(moment().format('MMM Do YY'));

console.log("\n");
console.log(mimodulo);
console.log("\n");

console.log(mimodulo[1].color);

console.log(mimodulo[0].ordenar());
