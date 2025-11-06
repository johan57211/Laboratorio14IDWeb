class Producto {
    #nombre;
    #precio;
    #stock;

    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get nombre() {
        return this.#nombre;
    }

    get precio() {
        return `$${this.#precio.toFixed(2)}`;
    }

    get stock() {
        return this.#stock;
    }

    set precio(valor) {
        if (valor > 0) {
            this.#precio = valor;
        } else {
            console.log("El precio debe ser mayor a 0.");
        }
    }

    set stock(valor) {
        if (valor >= 0) {
            this.#stock = valor;
        } else {
            console.log("El stock no puede ser negativo.");
        }
    }

    vender(cantidad) {
        if (cantidad <= 0) {
            console.log("La cantidad debe ser mayor que 0.");
            return;
        }
        if (cantidad <= this.#stock) {
            this.#stock -= cantidad;
            console.log(`Venta realizada: ${cantidad} unidades de ${this.#nombre}.`);
            console.log(`Stock restante: ${this.#stock}`);
        } else {
            console.log(`No hay suficiente stock de ${this.#nombre}.`);
        }
    }
}

let producto1 = new Producto("Mouse Gamer", 120, 10);

console.log("Producto creado:");
console.log(`Nombre: ${producto1.nombre}`);
console.log(`Precio: S/.${producto1.precio}`);
console.log(`Stock: ${producto1.stock}`);
producto1.vender(3);
producto1.vender(20);
producto1.precio = -5;
