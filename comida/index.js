
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
            return "La " + this.nombre + " es color " + this.ingredientes
        } 
    }
]

module.exports = comida;