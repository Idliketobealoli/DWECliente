let productosInfo = [];
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
    productosInfo = result.split("\n");
    productosInfo.shift();

    let htmlText = "<form name='selector'><label for='selectData'>Select data:</label>" +
        "<select id='selectData' name='selectData'>" +
        "<option value='99' selected disabled>Data</option>";

    productosInfo.forEach(function (line) {
        let keyValuePair = line.split(";");
        htmlText = htmlText.concat("<option value='", keyValuePair[1], "'>", keyValuePair[0], "</option>");
    });

    displayData.innerHTML = htmlText.concat("</select><br><button onclick=\"showResults()\">Result</button></form>")
}

function showResults() {
    let select = document.getElementById("selectData");
    displayData.innerHTML = displayData.innerHTML.concat("<br>", select.value);
}

window.addEventListener("load", start, false);