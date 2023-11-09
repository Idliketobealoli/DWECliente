function openNonRedimensionableWindow() { window.open("ejercicio3-noredimensionable.html", "ventananoredireccionable", "width=800,height=300,resizable=no"); }

function writeInTheNewWindow() {
    let h3 = document.getElementById('h3');
    h3.textContent = "Ejemplo de ventana nueva";

    let pUrl = document.getElementById('pUrl');
    pUrl.textContent = "URL Completa: "+window.location.href;

    let pProtocol = document.getElementById('pProtocol');
    pProtocol.textContent = "Protocolo utilizado: "+window.location.protocol;

    let pNavCode = document.getElementById('pNavCode');
    pNavCode.textContent = "Nombre en codigo del navegador: "+window.navigator.appCodeName;

    let pJavaAvailable = document.getElementById('pJava');
    pJavaAvailable.textContent = (window.navigator.javaEnabled())
        ? "Java SI disponible en esta ventana, o bien."
        : "Java NO disponible en esta ventana.";
}

function init() {
    let h1 = document.getElementById('h1');
    h1.textContent = "TAREA DWEC03";

    let name;
    let day;
    let month;
    let year;
    let now = new Date(Date.now());
    do {
        name = prompt("Introduce tu nombre y apellidos: ").trim();
        day = parseInt(prompt("Introduce tu dia de nacimiento: ").trim());
        month = parseInt(prompt("Introduce tu mes de nacimiento (numero): ").trim());
        year = parseInt(prompt("Introduce tu año de nacimiento: ").trim());
    }
    while (name.length < 1 || isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1 || year > now.getFullYear());

    month -=1;
    let p1 = document.getElementById('p1');
    p1.textContent = "Buenos dias " + name;

    let p2 = document.getElementById('p2');
    p2.textContent = "Tu nombre tiene " + name.length + " caracteres, incluidos espacios.";

    let p3 = document.getElementById('p3');
    let position = name.toLowerCase().indexOf("a");
    p3.textContent = "La primera letra A de tu nombre esta en la posicion: " + (position == -1) ? "La letra A no figura en tu nombre.": position ;

    let p4 = document.getElementById('p4');
    position = name.toLowerCase().lastIndexOf("a");
    p4.textContent = "La ultima letra A de tu nombre esta en la posicion: " + (position == -1) ? "La letra A no figura en tu nombre.": position ;

    let p5 = document.getElementById('p5');
    p5.textContent = "Tu nombre menos las 3 primeras letras es: " + name.substring(3);

    let p6 = document.getElementById('p6');
    p6.textContent = "Tu nombre todo en mayusculas es: "+ name.toUpperCase();

    let birthday = new Date(year, month, day);
    let age = now.getFullYear() - year;

    let p7 = document.getElementById('p7');
    p7.textContent = "Tu edad es: " + age + " años.";

    let p8 = document.getElementById('p8');
    p8.textContent = "Naciste un feliz " + birthday.getDate() + " / " + (birthday.getMonth() + 1) + " del año " + birthday.getFullYear();

    let p9 = document.getElementById('p9');
    p9.textContent = "El coseno de 180 es: " + Math.cos(Math.PI);

    let array = [34, 67, 23, 75, 35, 19];
    let p10 = document.getElementById('p10');
    p10.textContent = "El numero mayor de [34, 67, 23, 75, 35, 19] es: " + array.sort().reverse()[0];

    let p11 = document.getElementById('p11');
    p11.textContent = "Ejemplo de numero al azar: " + parseInt((Math.random() * 100).toString());
}