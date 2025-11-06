class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    mostrarInfo() {
        return `Nombre: ${this.nombre}, Email: ${this.email}`;
    }
}

class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = nivelFidelidad;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Nivel de fidelidad: ${this.nivelFidelidad}`;
    }
}

class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Permisos: ${this.permisos.join(", ")}`;
    }
}

let usuarios = [
    new Cliente("Johan", "johan@mail.com", 3),
    new Cliente("María", "maria@mail.com", 5),
    new Administrador("Ana", "ana@admin.com", ["crear", "editar", "eliminar"])
];

for (let usuario of usuarios) {
    console.log(usuario.mostrarInfo());
}
