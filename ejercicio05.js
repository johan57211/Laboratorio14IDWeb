const gradosARadianes = (grados) => {
    let conversion = grados * Math.PI / 180;
    console.log("Grados a Radianes: "+conversion.toFixed(2));
    console.log("Seno: "+Math.sin(conversion).toFixed(2));
    console.log("Coseno: "+Math.cos(conversion).toFixed(2));
}

const radianesAGrados = (radianes) => {
    let conversion = radianes * 180 / Math.PI;
    console.log("Radianes a Grados: "+conversion.toFixed(0))
}
gradosARadianes(53);
radianesAGrados(0.93);
