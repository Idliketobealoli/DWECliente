class Cyclist {
    constructor(name = "John Doe", weight = -1, power = -1) {
        this.name = name;
        this.weight = weight;
        this.power = power;
    }

    get vo2max() {
        return (10.8 * this.power / this.weight) + 7;
    }
}

{
    let cyclists = [];

    let position;
    let cyclistName;
    let cyclistWeight;
    let cyclistPower;
    let cyclistVo2max;
    let buttonPrevious;
    let buttonNext;

    function start() {
        position = document.getElementById("cyclistPosition");
        cyclistName = document.getElementById("ciclista");
        cyclistWeight = document.getElementById("peso");
        cyclistPower = document.getElementById("potencia");
        cyclistVo2max = document.getElementById("vo2max");
        buttonPrevious = document.getElementById("buttonPrevious");
        buttonNext = document.getElementById("buttonNext");

        let dataFile = document.getElementById("dataFile");

        dataFile.addEventListener("change", process, false);
    }

    function process(e) {
        let dataFile = e.target.files;
        let file = dataFile[0];
        let reader = new FileReader();

        reader.readAsText(file, "iso-8859-1");
        reader.addEventListener("load", loadCyclists, false);
    }

    function loadCyclists(e) {
        let result = e.target.result;

        let cyclistLines = result.split("\n");

        cyclistLines.forEach(function (line) {
            let lineData = line.split("|");
            cyclists.push(
                new Cyclist(
                    lineData[0].trim(),
                    parseFloat(lineData[1].trim()),
                    parseFloat(lineData[2].trim())
                )
            );
        });

        showData();
    }

    function showData() {
        if (position.value <= 0) {
            position.value = 0;
            buttonPrevious.disabled = true;
            buttonNext.disabled = false;
        }
        else if (position.value >= cyclists.length - 1) {
            position.value = cyclists.length -1;
            buttonNext.disabled = true;
            buttonPrevious.disabled = false;
        }
        else {
            buttonNext.disabled = false;
            buttonPrevious.disabled = false;
        }

        cyclistName.value = cyclists.at(position.value).name;
        cyclistWeight.value = cyclists.at(position.value).weight;
        cyclistPower.value = cyclists.at(position.value).power;
        cyclistVo2max.value = cyclists.at(position.value).vo2max;
    }

    function nextCyclist() {
        position.value++;
        showData();
    }

    function previousCyclist() {
        position.value--;
        showData();
    }

    window.addEventListener("load", start, false);
}