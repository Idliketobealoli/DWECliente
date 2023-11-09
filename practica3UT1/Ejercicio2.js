{
    let allOk = true;
    let practica1;
    let practica2;
    let examen;
    let actitud;
    let mediaPracticas = 0;
    let mediaSinActitud;
    let mediaTotal;

    do {
        practica1 = parseFloat(prompt("[PRACTICA 1] Give me a number from 1 to 10: ").trim());
        practica2 = parseFloat(prompt("[PRACTICA 2] Give me a number from 1 to 10: ").trim());
        examen    = parseFloat(prompt("[EXAMEN] Give me a number from 1 to 10: ").trim());
        actitud   = parseFloat(prompt("[ACTITUD] Give me a number from 1 to 10: ").trim());

        allOk = !(isNaN(practica1) || practica1 > 10.0 || practica1 < 1.0 ||
                  isNaN(practica2) || practica2 > 10.0 || practica2 < 1.0 ||
                  isNaN(examen)    || examen    > 10.0 || examen    < 1.0 ||
                  isNaN(actitud)   || actitud   > 10.0 || actitud   < 1.0 );
    }
    while (!allOk);

    if(practica1 >= 4 && practica2 >= 4) {
        mediaPracticas = media([practica1,practica2]);
    }

    mediaSinActitud = mediaPracticas*0.45 + examen*0.45;
    mediaTotal = mediaSinActitud;
    if (mediaSinActitud >= 4.5) { mediaTotal += actitud*0.1; }

    console.log("Media total: " + mediaTotal);


    function media(notas) {
        let numerator = 0;
        let denominator = 0;
        notas.forEach(function (nota) {
            numerator += nota
            denominator += 1;
        });
        return numerator / denominator;
    }
}