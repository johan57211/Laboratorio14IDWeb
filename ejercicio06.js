const contraseñaAleatoria = () => {
    let contraseña = "";
    for(let i = 0; i<=6; i++){
        contraseña += Math.floor(Math.random()*9+1);
    }
    console.log("La contraseña aleatoria es: "+contraseña);
}

contraseñaAleatoria();