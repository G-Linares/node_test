// dentro de este modulo esta la multiplicacion

function multiplicarind(num1, num2){
    if( num1 == 0 || num2 == 0){
        return "Al multiplicar por 0 todo se vuelve 0";
    } else return num1 * num2;
    
}


module.exports = {multiplicarind};