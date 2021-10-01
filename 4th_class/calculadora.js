// introduzco modulo que contiene todas las opes

let mimodulo = require('./opes/todo');

/// vienen un modulo por cada operacion

let suma = require('./opes/sumar');
let resta = require('./opes/restar');
let multiplicacion = require('./opes/multiplicar');
let division = require('./opes/dividir');

//imprimo resultado de modulo multiple

console.log("La suma es: " + mimodulo.sumardetodo(1,2));
console.log("La resta es: " + mimodulo.restardetodo(10,2));
console.log("La multiplicacion es: " + mimodulo.multiplicardetodo(5,10));
console.log("La division es: " + mimodulo.dividirdetodo(100,50));


/// imprimo resultado de modulos separados

console.log("\nLa suma es: " + suma.sumarind(1, 2));
console.log("La resta es: " + resta.restarind(10, 2));
console.log("La multiplicacion es: " + multiplicacion.multiplicarind(2,10));
console.log("La division es: " + division.dividirind(100,0));