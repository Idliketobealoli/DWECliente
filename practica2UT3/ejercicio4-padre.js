let childWindow;

function sendMessageToChild() { childWindow.postMessage(document.getElementById("messageForChild").value, "*"); }

function openChild() { childWindow = window.open("ejercicio4-hija.html", "ChildWindow", "width=400,height=300"); }

window.addEventListener("message", function(event) {
    if (event.source !== window) {
        let received = document.getElementById("receivedInParent");
        received.textContent = "Contenido enviado por la ventana hija: " + event.data;
    }
});