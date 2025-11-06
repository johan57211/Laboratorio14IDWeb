class Figura {
    constructor(nombre) {
        this.nombre = nombre;
    }

    area() {
        console.log("Este método debe ser sobrescrito por la subclase.");
        return 0;
    }

    perimetro() {
        console.log("Este método debe ser sobrescrito por la subclase.");
        return 0;
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super("Cuadrado");
        this.lado = lado;
    }

    area() {
        return this.lado * this.lado;
    }

    perimetro() {
        return 4 * this.lado;
    }
}

class Triangulo extends Figura {
    constructor(base, altura, lado1, lado2, lado3) {
        super("Triángulo");
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    area() {
        return (this.base * this.altura) / 2;
    }

    perimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
}

let cuadrado1 = new Cuadrado(5);
console.log(`Figura: ${cuadrado1.nombre}`);
console.log(`Área: ${cuadrado1.area()}`);
console.log(`Perímetro: ${cuadrado1.perimetro()}`);

let triangulo1 = new Triangulo(4, 3, 4, 3, 5);
console.log(`\nFigura: ${triangulo1.nombre}`);
console.log(`Área: ${triangulo1.area()}`);
console.log(`Perímetro: ${triangulo1.perimetro()}`);
