function sendMessageToParent() { window.opener.postMessage(document.getElementById("messageForParent").value, "*"); }

window.addEventListener("message", function(event) {
    if (event.source !== window) {
        let received = document.getElementById("receivedInChild");
        received.textContent = "Contenido enviado por la ventana padre: " + event.data;
    }
});