class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        console.log(`${producto.nombre} agregado al carrito.`);
    }

    calcularTotal() {
        return this.productos.reduce((total, p) => total + p.precio, 0);
    }

    mostrarResumen() {
        console.log("Resumen del carrito:");
        this.productos.forEach(p => {
            console.log(`- ${p.nombre}: $${p.precio.toFixed(2)}`);
        });
        console.log(`Total: $${this.calcularTotal().toFixed(2)}`);
    }
}

let p1 = new Producto("Mouse Gamer", 120.5);
let p2 = new Producto("Teclado Mecánico", 250.75);
let p3 = new Producto("Monitor 24\"", 600.0);

let carrito = new Carrito();
carrito.agregarProducto(p1);
carrito.agregarProducto(p2);
carrito.agregarProducto(p3);
carrito.mostrarResumen();
