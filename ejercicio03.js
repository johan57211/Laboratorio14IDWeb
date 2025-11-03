const lanzarDados = () => {
    let dado1 = Math.floor((Math.random()*(6)) + 1);
    let dado2 = Math.floor((Math.random()*(6)) + 1);

    console.log("Dado 1: "+dado1+"\nDado 2: "+dado2+"\nLa suma es: "+(dado1+dado2));
}

lanzarDados();
