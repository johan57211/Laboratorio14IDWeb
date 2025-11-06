class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }

    calcularSueldo() {
        return this.sueldoBase;
    }
}

class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    }

    calcularSueldo() {
        return super.calcularSueldo() * 1.10;
    }
}

class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase, lenguaje);
    }

    calcularSueldo() {
        return super.calcularSueldo() * 1.25;
    }
}

let emp1 = new Empleado("Carlos", 2000);
let prog1 = new Programador("Johan", 3000, "JavaScript");
let senior1 = new ProgramadorSenior("Ana", 4000, "Python");

console.log(`${emp1.nombre}: $${emp1.calcularSueldo().toFixed(2)}`);
console.log(`${prog1.nombre} (${prog1.lenguaje}): $${prog1.calcularSueldo().toFixed(2)}`);
console.log(`${senior1.nombre} (${senior1.lenguaje}): $${senior1.calcularSueldo().toFixed(2)}`);
