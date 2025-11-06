class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    mostrarInfo() {
        return `Usuario: ${this.nombre} (${this.email})`;
    }
}

class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = nivelFidelidad;
    }

    mostrarInfo() {
        return `Cliente: ${this.nombre}, Email: ${this.email}, Nivel de fidelidad: ${this.nivelFidelidad}`;
    }
}

class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }

    mostrarInfo() {
        return `Administrador: ${this.nombre}, Email: ${this.email}, Permisos: ${this.permisos.join(", ")}`;
    }
}

let usuarios = [
    new Cliente("Johan", "jyucrat@unsa.edu.pe", 4),
    new Administrador("Ana", "ana@admin.com", ["crear", "editar", "eliminar"])
];

for (let u of usuarios) {
    console.log(u.mostrarInfo());
}
