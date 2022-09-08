
class producto {
    constructor (marca, precio, tipo){
        this. marca = marca;
        this.precio = precio;
        this.tipo = tipo;
    }
}

let precioProductos = [
    { marca: "chubeats", precio: "18.00", tipo: "treats" },
    {marca: "Chubi pet leash", precio: "89.90", tipo: "Correa y Collar"},
    {marca: "BrandoBed", precio: "120.00", tipo: "Cama"}
]

function cargaProducto(arrayProductos) {
    let marca = prompt ("Ingrese la marca que desea")
    let precio = parseInt (prompt ("Ingrese el precio"))
    let tipo = prompt ("Elija el tipo de producto")
    const nuevoProducto = new producto (marca, precio, tipo)
    arrayProductos.push (nuevoProducto)
}


function mostrarCarrito(arrayProductos) { 
    arrayProductos.forEach ((producto) =>{
        alert (`Contenido del carrito: ${producto.tipo} marca ${producto.marca} de ${producto.precio} `)
    })
}

function finalizarCompra (arrayProductos){
    const total = arrayProductos.reduce ((acc,el) => acc + el.precio,0);
    alert (`Su compra es por un total de ${total}`);
}

function ofertadelDía(arrayProductos) {
    const ofertas = precioProductos.filter ((el) => el.precio < 100);
    for (const oferta of ofertas)
    alert ("La oferta de hoy: Producto" + oferta.tipo + " " + oferta.marca + " " + "a un valor de s/." + oferta.precio);
    
}

let arrayProductos = []


let opcion = prompt ("¡Bienvenido a Brando Pet Shop! ¿En que podemos ayudarlo el día de hoy? : \n 1: Elegir u producto \n 2: ver carrito \n 3: Sugerir oferta \n 4: Finalizar compra \n 5: Salir")

while (opcion !== "5"){
    if (opcion === "1"){
        cargaProducto (arrayProductos)
    }

    if (opcion === "2"){
        mostrarCarrito (arrayProductos)
    }
    if (opcion === "3"){
        ofertadelDía (arrayProductos)
    }
    if (opcion === "4") {
        finalizarCompra (arrayProductos)
    }

    opcion = prompt (" Vuelva a ingresar una opcion: \n 1: Seguir comprando \n 2: ver carrito \n 3: Sugerir Oferta \n 4: Finalizar compra \n 5: Salir")

    }

   swal.fire ("Muchas gracias por comprar en Brando PetShop ¡Vuelva Pronto!")