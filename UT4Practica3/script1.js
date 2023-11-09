let alumnos = [];
let candidatos = [];
let votos = [];

function start() {
    displayData = document.getElementById("dataSection");
    let dataFile = document.getElementById("dataFile");
    dataFile.addEventListener("change", process, false);
}

function process(e) {
    let dataFile = e.target.files;
    let file = dataFile[0];
    let reader = new FileReader();

    reader.readAsText(file, "iso-8859-1");
    reader.addEventListener("load", show, false);
}

function show(e) {
    let result = e.target.result;
    alumnos = result.split("\n");

    let htmlText = "Selecciona que alumnos se presentan a ser delegados: <br/>";

    alumnos.forEach(function(line) {
        let lineCode = line.replaceAll(" ","_");
        htmlText = htmlText.concat("<input type='checkbox' name='" +lineCode+ "'>"+line+"<br>");
    });

    displayData.innerHTML = htmlText.concat("<button onclick='loadCandidates()'>Cargar candidatos</button>");
}

function loadCandidates() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            candidatos[candidatos.length] = (checkbox.getAttribute('name'));
        }
    });

    if (candidatos.length === 0) {
        displayData.innerHTML = "No se han presentado candidatos.";
        return;
    }

    let htmlText = "Los candidatos que se presentan son los siguientes:<br/>";

    let position = 0;
    candidatos.forEach(function(candidate) {
        htmlText = htmlText.concat(" - "+candidate.replaceAll("_"," ")+": CODE - ["+position+"]<br/>");
        position++;
    });

    displayData.innerHTML = htmlText.concat("<button onclick='startVote()'>Empezar votacion</button>");
}

function startVote() {
    alumnos.forEach(function(student) {
        let vote = -1;
        while (isNaN(vote) || vote < 0 || vote >= candidatos.length) {
            vote = parseInt(prompt("[Vota poniendo el código del candidato] Le toca votar a "+student));
        }
        votos[length] = vote;
    });

    countVotes();
}

function countVotes() {
    let codeCount = {};
    let mostFrequentCode = -1;
    let secondMostFrequentCode = -1;
    let max = 0;

    for (let votoCode of votos) {
        if (codeCount[votoCode] === undefined) {
            codeCount[votoCode] = 1;
        } else { codeCount[votoCode]++; }

        if (codeCount[votoCode] > max) {
            secondMostFrequentCode = mostFrequentCode;
            mostFrequentCode = votoCode;
            max = codeCount[votoCode];
        }
    }

    let delegado = "No hay delegado";
    if (mostFrequentCode !== -1) { delegado = candidatos[mostFrequentCode].replaceAll("_", " "); }

    let subdelegado = "No hay subdelegado";
    if (secondMostFrequentCode !== -1) { subdelegado = candidatos[secondMostFrequentCode].replaceAll("_", " "); }

    showWinner(delegado, subdelegado);
}

function showWinner(delegado, subdelegado) {
    displayData.innerHTML = displayData.innerHTML
        .concat("<br/><br/>El delegado es: "+delegado.trim()+".<br/>El subdelegado es: "+subdelegado.trim()+".");
}

window.addEventListener("load", start, false);