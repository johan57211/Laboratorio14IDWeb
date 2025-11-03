const normalizacionCalificaiones = (notas) => {
    let maxima = Math.round(Math.max(...notas));
    let notasNormalizadas = [];
    for (let i = 0; i<notas.length; i++){
        notasNormalizadas [i] = notas[i]/maxima;
    }

    console.log("Notas normalizadas: "+notasNormalizadas.join(", "));
}

normalizacionCalificaiones([10, 20, 50, 60, 100]);    