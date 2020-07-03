const connection = new WebSocket("ws://localhost:3000")
const logWindow = document.querySelector("#log-window")
const filePath = document.getElementById("#logFilePath").value

connection.onopen = () => {
    console.log("josh is within connection onopen" + filePath)
    if(filePath){
        connection.send(filePath)
    }
};

connection.onmessage = (event) => {
    console.log("josh is within onmessage" + event.data.split("\n").join("<hr>"))
    logWindow.innerHTML = event.data.split("\n").join("<hr>")
}