// Esta será la clase que contendrá los datos de cada alumno.
class Alumno {
    constructor(nom, ape, exp, nFaltas) {
        this.nombre = nom.toString();
        this.apellidos = ape.toString();
        this.expediente = exp.toString();
        this.numFaltas = parseInt(nFaltas); // este parseInt para asegurarnos de que el numero de faltas es un numero.
    }

    // con esto autocalculamos el porcentaje de faltas al crear al alumno, y hacemos que tenga un atributo porcentajeFaltas.
    get porcentajeFaltas() {
        return ((this.numFaltas / 115) * 100).toFixed(2);
        // Retornará NaN en caso de que numFaltas no sea un entero.
        // Si no, lo devolverá con dos decimales.
    }

    // con esto autocalculamos el numero (entero) de faltas al crear al alumno, y hacemos que tenga un atributo faltasPendientes.
    get faltasPendientes() {
        let pendientes = ((115 * 0.15) - this.numFaltas).toFixed();
        if (pendientes < 0) {
            return `El alumno ha perdido la evaluacion continua por ${pendientes * -1} faltas.`;
            // esto no se verá entero debido a que el textBox es demasiado pequeño, pero
            // si clicas en el texto y das a la flecha derecha se puede ver el texto completo.
            // Está así puesto porque si no me parecía muy simple.
        }
        else return pendientes.toString();
    }
}

{
    let allAlumnos = []; // el array que contendrá todos los alumnos del txt.
    let alumnos = [];    // el array que contendrá todos los alumnos seleccionados.

    let inputNombre;           // corresponde al input del nombre del alumno.
    let inputApellidos;        // corresponde al input de los apellidos del alumno.
    let inputExpediente;       // corresponde al input del expediente del alumno.
    let inputNumFaltas;        // corresponde al input del numero de faltas registradas del alumno.
    let inputPorcentajeFaltas; // corresponde al input del porcentaje de faltas que ha tenido el alumno durante el curso.
    let inputRestaFaltas;      // corresponde al input del numero de faltas restantes que le quedan al alumno.
    let buttonNext;            // corresponde al boton de continuar.
    let datos;                 // corresponde al selector de alumnos.

    function start() {
        // inicializamos los elementos que usaremos.
        inputNombre = document.getElementById("nombre");
        inputApellidos = document.getElementById("apellidos");
        inputExpediente = document.getElementById("expediente");
        inputNumFaltas = document.getElementById("faltas");
        inputPorcentajeFaltas = document.getElementById("porcentaje");
        inputRestaFaltas = document.getElementById("resta");
        buttonNext = document.getElementById("siguiente");
        datos = document.getElementById("datos");

        // esto corresponde al boton de seleccionar el archivo.
        let dataFile = document.getElementById("file-input");

        // le añadimos un eventListener para que en cuanto se seleccione el archivo, se ejecute la función process()
        dataFile.addEventListener("change", process, false);
    }

    function process(e) {
        // en esta funcion leemos el contenido del archivo y llamamos a loadAlumnos()
        let dataFile = e.target.files;
        let file = dataFile[0];
        let reader = new FileReader();

        reader.readAsText(file, "iso-8859-1");
        reader.addEventListener("load", loadAlumnos, false);
    }

    function loadAlumnos(e) {
        // cogemos el texto del archivo
        let result = e.target.result;

        // lo convertimos en un array de strings, donde cada string es una linea del archivo
        let allAlumnosLines = result.split("\n");
        allAlumnosLines.shift(); // quitamos la cabecera del txt

        // por cada string del array, creamos un sub-array con los datos del alumno (separandolo por |)
        // y con ese sub-array, creamos un alumno nuevo y lo metemos en la lista de todos los alumnos.
        allAlumnosLines.forEach(function (line) {
            let lineData = line.split("|");
            allAlumnos.push(
                new Alumno(
                    lineData[0].trim(),
                    lineData[1].trim(),
                    lineData[2].trim(),
                    parseInt(lineData[3])
                )
            );
        });

        // finalmente llamamos a showData() para que muestre los alumnos en el selector multiple.
        showData();
    }

    function showData() {
        let textHtml = "";
        // por cada alumno, creamos un option que tiene un onclick que llama a addAlumno(expediente)
        // con esto haremos que cada vez que el usuario pulse un alumno, se añadirá o quitará de la lista de alumnos seleccionados,
        // en funcion de si estaba o no ya en dicha lista.
        allAlumnos.forEach(function(alumno) {
            textHtml = textHtml.concat(`<option value='${alumno.expediente}' onclick='addAlumno("${alumno.expediente}")'>${alumno.nombre} ${alumno.apellidos}</option>`);
        });

        datos.innerHTML = textHtml;

        // una vez cargados los alumnos en el selector, le añadimos un onclick al boton de abajo para que ejecute showAlumno(-1)
        buttonNext.setAttribute("onclick", "showAlumno(-1)");
    }

    function addAlumno(expediente) {
        // busca si el alumno con el expediente pasado por parametro está dentro del array de alumnos seleccionados.
        let alumnoIndex = alumnos.findIndex(x => x.expediente === expediente);

        if (alumnoIndex === -1) { // si seleccionas un alumno no seleccionado previamente, lo añade al array.
            alumnos.push(allAlumnos.find(x => x.expediente === expediente));
        }
        else { //si seleccionas un alumno ya seleccionado, lo quita del array.
            alumnos.splice(alumnoIndex, 1);
        }

        console.log(alumnos.length);
    }

    // esta funcion mostrará los datos del alumno en cuestión.
    function showAlumno(index) {
        // si la lista de alumnos seleccionados está vacía, no hace nada.
        if (alumnos.length > 0) {
            // si tiene datos, comprueba que el indice pasado sea un numero,
            // sea mayor o igual a cero y menor que la longitud del array de alumnos seleccionados.
            // En caso de que no lo sea, se actualiza el indice a buscar a 0.

            // De esta forma, podemos hacer que el boton siguiente haga un "loop" de los alumnos. Me explico,
            // si ya hemos llegado al ultimo alumno de la lista y volvemos a clicar "siguiente", nos mostrará el
            // primer alumno de la lista. Podria haber hecho que se desactivase el boton, pero creo que asi es mejor, ya que
            // como no tenemos un boton de "anterior", si por algun casual queremos volver a un alumno anterior, en vez de tener
            // que recargar la página y seleccionar alumnos, podemos simplemente seguir clicando siguiente hasta que el alumno
            // vuelva a aparecer.

            // Esto, si lo combinamos con el chequeo anterior (alumnos.length > 0), hace que al principio el boton no haga nada hasta que no haya
            // al menos un alumno cargado, y cuando lo hay, va directamente al que esté en la posición 0 (ya que hemos puesto que el onclick del
            // botón haga showAlumno(-1)).
            if (isNaN(index) || index < 0 || index >= alumnos.length) {
                console.log("indice actualizado a 0");
                index = 0;
            }

            // Tras esto, modificamos los textboxes para que muestre los datos del alumno.
            console.log(`mostrando alumno ${index}`);
            inputNombre.value = alumnos[index].nombre;
            inputApellidos.value = alumnos.at(index).apellidos;
            inputExpediente.value = alumnos.at(index).expediente;
            inputNumFaltas.value = alumnos.at(index).numFaltas;
            inputPorcentajeFaltas.value = alumnos.at(index).porcentajeFaltas;
            inputRestaFaltas.value = alumnos.at(index).faltasPendientes;

            index = index+1; // sumamos uno al index para que el boton "siguiente" vaya al siguiente alumno
            // (ese index+1 se podia hacer en la linea de abajo, pero lo he puesto aqui para poder explicarlo de mejor manera).
            buttonNext.setAttribute("onclick", `nextAlumno(${index})`);
            return true; // este return es para que el IDE no me de warnings.
        }
        else return false // lo mismo para este return.
    }

    function nextAlumno(index) { // esta función está aqui para que el código no se queje de recursividad.
        let newIndex = index++;
        showAlumno(newIndex);
        //return true;
    }

    // y este es el listener que llama a la funcion start en cuanto se carga la pagina.
    window.addEventListener("load", start, false);
}