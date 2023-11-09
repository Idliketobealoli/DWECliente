function comenzar() {
    zonadatos = document.getElementById("zonadatos");
    var archivos = document.getElementById("archivos");
    archivos.addEventListener("change", procesar, false);
}

function procesar(e) {
    var archivos = e.target.files;
    var miarchivo = archivos[0];
    var lector = new FileReader();

    lector.readAsText(miarchivo, "iso-8859-1");
    lector.addEventListener("load", mostrarEnWeb, false);
}

function mostrarEnWeb(e) {
    var resultado = e.target.result;
    var datos = resultado.split('\n');
    zonadatos.innerHTML = "";
    datos.forEach(function (line) {
        zonadatos.innerHTML = zonadatos.innerHTML.concat(line, "<br>");
    });
}

window.addEventListener("load", comenzar, false);
