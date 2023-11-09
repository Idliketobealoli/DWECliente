{
    const elementos = [
        "dato 1",
        "dato 2",
        "dato 3",
        "dato 4",
        "dato 5",
        "dato 6",
        "dato 7",
        "dato 8",
        "dato 9",
        "dato 10"
    ];
    function elementList() {
        let elementList = document.getElementById("elementList");

        elementos.forEach(function (element) {
            let listItem = document.createElement("li");
            listItem.textContent = element;
            elementList.appendChild(listItem);
        });
    }

    function addDato(dato) {
        let addDato = document.getElementById("addDato");

        // esto esta aqui porque si no el dato extra se añade al array elementos,
        // y quiero que se añada a un array distinto.
        let elementosPlusOne = elementos.concat([]);
        elementosPlusOne[elementos.length] = dato;
        elementosPlusOne.forEach(function (element) {
            let listItem = document.createElement("li");
            listItem.textContent = element;
            addDato.appendChild(listItem);
        });
    }

    function addMore(datos) {
        let dosMas = document.getElementById("dosMas");

        let elementosPlusTwo = elementos.concat(datos);
        elementosPlusTwo.forEach(function (element) {
            let listItem = document.createElement("li");
            listItem.textContent = element;
            dosMas.appendChild(listItem);
        });
    }

    function addAtStart(datos) {
        let addAtStart = document.getElementById("addAtStart");

        let elementosPlusStart = elementos.reverse().concat(datos).reverse();
        elementosPlusStart.forEach(function (element) {
            let listItem = document.createElement("li");
            listItem.textContent = element;
            addAtStart.appendChild(listItem);
        });
    }

    function selectRandom() {
        let elementList = document.getElementById("random");

        // el reverse está porque si no, me salia la lista invertida.
        elementos.reverse().forEach(function (element) {
            let listItem = document.createElement("li");
            listItem.textContent = element;
            elementList.appendChild(listItem);
        });

        // aqui hay un +1 porque si no está y, por ejemplo, sale un 0.7632,
        // el metodo toPrecision lo dejaría como 0.7, no como 0. Por tanto,
        // debo sumar 1 para que el resultado minimo sea 1 y el máximo la longitud del array.
        let randomNumber = (Math.random() * elementos.length + 1).toPrecision(1);
        let lastLi = document.createElement("li");
        // Debido a lo anterior, ahora requerimos de restar 1 al numero random que generamos,
        // pero de esta manera nos hemos evitado que, por ejemplo, apunte a elementos[0.7] (lo cual sería undefined),
        // cuando deberia apuntar a elementos[0]
        lastLi.textContent = "El dato elegido aleatoriamente esta vez es: " + elementos[randomNumber - 1];
        elementList.appendChild(lastLi);
    }

    function deleteLastItems(number) {
        let elementList = document.getElementById("deleteLast3");

        let elementosMinustLast = elementos.slice(0, -number);
        elementosMinustLast.forEach(function (element) {
            let listItem = document.createElement("li");
            listItem.textContent = element;
            elementList.appendChild(listItem);
        });
    }

    function subarray(first, last) {
        let elementList = document.getElementById("subarray");

        let elementsFromTo = elementos.slice(first, last+1);
        elementsFromTo.forEach(function (element) {
            let listItem = document.createElement("li");
            listItem.textContent = element;
            elementList.appendChild(listItem);
        });
    }

    function mayusculas() {
        let elementList = document.getElementById("mayusculas");

        let elementsMyscl = [];
        elementos.forEach(function (element) {
            elementsMyscl.push([element.toUpperCase()]);
        });

        elementsMyscl.forEach(function (element) {
            let listItem = document.createElement("li");
            listItem.textContent = element;
            elementList.appendChild(listItem);
        });
    }

    elementList();
    addDato("dato extra");
    addMore(["dato extra 1", "dato extra 2"]);
    addAtStart(["dato extra"]);
    selectRandom();
    deleteLastItems(3);
    subarray(4,8);
    mayusculas();
}