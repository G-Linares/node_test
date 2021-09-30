// dentro de este modulo esta la division

function dividirind(num1, num2){
    if( num1 == 0 || num2 == 0){
        return "No se puede dividir entre 0";
    } else return num1 / num2;
}

module.exports = {dividirind};