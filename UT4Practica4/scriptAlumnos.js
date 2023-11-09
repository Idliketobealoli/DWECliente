class Alumno {
    constructor(id, name, isCandidate, votes) {
        this.id = id;
        this.name = name;
        this.isCandidate = isCandidate;
        this.votes = votes;
    }
}

let alumnos = [];
let candidates = [];

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

    let alumnosNames = result.split("\n");

    alumnosNames.forEach(function (line) {
        alumnos.push(new Alumno(alumnos.length, line, false, 0));
    });

    let htmlText = "Selecciona que alumnos se presentan a ser delegados: <br/>";

    alumnos.forEach(function(alumno) {
        htmlText = htmlText.concat("<input type='checkbox' name='" +alumno.id+ "'>"+alumno.name+"<br>");
    });

    displayData.innerHTML = htmlText.concat("<button onclick='loadCandidates()'>Cargar candidatos</button>");
}

function loadCandidates() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            alumnos.at(checkbox.name).isCandidate = true;
        }
    });

    candidates = alumnos.filter(alumno => alumno.isCandidate === true);
    console.log(candidates.length);
    if (candidates.length === 0) {
        displayData.innerHTML = "No se han presentado candidatos.";
        return;
    }

    let htmlText = "Los candidatos que se presentan son los siguientes:<br/>";

    candidates.forEach(function(candidate) {
        htmlText = htmlText.concat("CODE ["+candidate.id+"] - "+candidate.name+"<br/>");
    });

    displayData.innerHTML = htmlText.concat("<button onclick='startVote()'>Empezar votacion</button>");
}

function startVote() {
    let validVotes = [];
    candidates.forEach(function (candidate) {
        validVotes.push(candidate.id);
    });

    alumnos.forEach(function(student) {
        let vote = -1;
        let voteWasValid = false;
        while (!voteWasValid) {
            vote = parseInt(prompt("[Vota poniendo el código del candidato] Le toca votar a "+student.name));
            if (!isNaN(vote) && validVotes.includes(vote)) {
                console.log(student.name+" voted correctly: "+vote);
                voteWasValid = true;
            }
        }
        alumnos.at(vote).votes++;
    });

    countVotes();
}

function countVotes() {
    let delegado = candidates.reduce((mostVotedCandidate, currentCandidate) => {
        return currentCandidate.votes > mostVotedCandidate.votes ? currentCandidate : mostVotedCandidate;
    }, candidates[0]);

    let remainingCandidates = candidates.filter(candidate => candidate !== delegado);
    let subdelegado = remainingCandidates.reduce((mostVotedCandidate, currentCandidate) => {
        return currentCandidate.votes > mostVotedCandidate.votes ? currentCandidate : mostVotedCandidate;
    }, remainingCandidates[0]);

    showWinner(delegado.name, subdelegado.name);
}

function showWinner(delegado, subdelegado) {
    displayData.innerHTML = displayData.innerHTML
        .concat("<br/><br/>El delegado es: "+delegado.trim()+".<br/>El subdelegado es: "+subdelegado.trim()+".");
}

window.addEventListener("load", start, false);