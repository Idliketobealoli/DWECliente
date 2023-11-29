/*
Crea un formulario HTML con elementos input que aún no hayamos utilizado (por ejemplo: date, range, password, tel, url, etc).

A continuación, mediante código javascript, visualiza el contenido de los datos rellenos del formulario en un elemento <p> o <pre> o <div> ....

Utiliza las estructuras de nivel 0 o nivel 2 del DOM vistas en la teoría para referenciar los elementos.
 */
{
    let inputPassword;
    let resultPassword;
    let inputEmail;
    let resultEmail;
    let inputDate;
    let resultDate;
    let inputRange;
    let resultRange;
    let inputPhone;
    let resultPhone;
    let inputUrl;
    let resultUrl;
    let form;

    function start() {
        inputPassword = document.getElementById("password");
        resultPassword = document.getElementById("password-result");
        inputEmail = document.getElementById("email");
        resultEmail = document.getElementById("email-result");
        inputDate = document.getElementById("date");
        resultDate = document.getElementById("date-result");
        inputRange = document.getElementById("range");
        resultRange = document.getElementById("range-result");
        inputPhone = document.getElementById("tel");
        resultPhone = document.getElementById("phone-result");
        inputUrl = document.getElementById("url");
        resultUrl = document.getElementById("url-result");

        form = document.forms["form"];
    }

    function showResults() {
        if (form.reportValidity()) {
            resultPassword.innerText = inputPassword.value;
            resultEmail.innerText = inputEmail.value;
            resultDate.innerText = inputDate.value;
            resultRange.innerText = inputRange.value;
            resultPhone.innerText = inputPhone.value;
            resultUrl.innerText = inputUrl.value;
        }
    }

    window.addEventListener("load", start, false);
}