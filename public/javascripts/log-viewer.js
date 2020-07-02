const connection = new WebSocket("ws://localhost:3000");
const logWindow = document.querySelector("log-window");

connection.onopen = function(event) {
    logWindow.innerHTML = data.event;
};