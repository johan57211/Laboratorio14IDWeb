const DistanciaDosPuntos = (x1, y1, x2, y2) => {
    let distancia = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1-y2, 2));

    let distanciaOrigen1 = Math.sqrt(x1 ** 2 + y1 ** 2);
    let distanciaOrigen2 = Math.sqrt(x2 ** 2 + y2 ** 2);

    console.log("Distancia entre los 2 puntos: "+distancia.toFixed(2) +
            "\nDistancia del primer punto al origen: "+distanciaOrigen1.toFixed(2)+
            "\nDistancia del segundo punto al origen: "+distanciaOrigen2.toFixed(2)+
            "\nSuma de las distancias: "+(distanciaOrigen1+distanciaOrigen2).toFixed(2)
        );
}

DistanciaDosPuntos(1, 2, 3, 4);
