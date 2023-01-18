
//arrays
let productoDisponible = prompt("ingrese ropaVerano, ropaInvierno, ropaInterior")
let lista = {
    ropaVerano: ["remera", "short" , "bermuda" , "musculosa"],
    ropaInvierno:["buso", "campera" , "camiseta"],
    ropaInterior: ["ombachas", "calsoncillos", "medias"]
};
if (prodcutoDisponible || lista){
alert ("estos son los productos dispobibles por temporada");
}else {
    alert ("No puede indentificar el procuto, vuelva a intentarlo")
}
console.log (lista.ropaVerano[0]);

//funcion  constructora
class Prenda {
    constructor (nombre , color , edad , tamaño){
    this.nombre= nombre;
    this.color= color;
    this.edad= edad;
    this.tamaño= tamaño;
    } 
    seleccionar () {
        alert("Agregas" + "this.nombre" + "al carrito");
    }
}
let listaPrendas= [ 
    new Prenda ('remera', amarillo, 6 , small),
    new Prenda ('short', azul, 10 , medium),
    new Prenda ( 'musculosa', blanca, 8, big)
];


// filtrar un producto 
function Producto ( descricion, precio) {
    this.descricion= descricion;
    this.precio= precio;
}

let listaProductos = [
    new Producto (camisa , 500), 
    new Producto (pantalon, 900),
    new Producto (saco, 300)
];

for (const producto of listaProductos) {    
    if (producto.descricion == 'camisa'){

    }
}
let listaPreciosMayorA400 = listaProductos.filter ( producto=> {
    return producto.precio > 400 ;
})



// funciones de orden superior

function calcular (param1 , param2, sumar ){
    return resultado ( Number(param1) +  Number(param2) );
}
console.log(calcular (500, 300, sumar));
alert (resultado);
