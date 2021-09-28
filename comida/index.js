// mi primer modulo

function palabra(){
    return ('hola');
}

let comida = [
    {
        nombre: 'Hamburguesa', 
        ingredientes: 'cebolla',
        ordenar: function(){
            return "La " + this.nombre + " contiene " + this.ingredientes
        } 
    },{
        numero: 'Mansion', 
        color: 'Verde',
        ordenar: function(){
            //return "La " + this.nombre + " es color " + this.ingredientes
             console.log(moment().format('MMM Do YY'));
        } 
    }
]



module.exports = {palabra, comida};


