const connection = new WebSocket("ws://localhost:3000")
const logWindow = document.querySelector("#log-window")
const logFilePath = document.getElementById("#logFilePath")

connection.onopen = () => {
    connection.send(filePath)
};

connection.onmessage = (event) => {
    logWindow.innerHTML = event.data.split("\n").join("<hr>")
}