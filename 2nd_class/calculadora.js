// introduzco modulo que contiene todas las opes

let mimodulo = require('./opes/todo');

/// vienen un modulo por cada operacion

let sumaind = require('./opes/sumar');
let restaind = require('./opes/restar');
let multiplicacionind = require('./opes/multiplicar');
let divisionind = require('./opes/dividir');

//imprimo resultado de modulo multiple

console.log("La suma es: " + (mimodulo.sumardetodo(1,2)));
console.log("La resta es: " + (mimodulo.restardetodo(10,2)));
console.log("La multiplicacion es: " + (mimodulo.multiplicardetodo(5,10)));
console.log("La division es: " + (mimodulo.dividirdetodo(100,50)));


/// imprimo resultado de modulos separados

console.log("\nLa suma es: " + sumaind.sumarind(1, 2));
console.log("La resta es: " + restaind.restarind(10, 2));
console.log("La multiplicacion es: " + multiplicacionind.multiplicarind(5,10));
console.log("La division es: " + divisionind.dividirind(100,50));