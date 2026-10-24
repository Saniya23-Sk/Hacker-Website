function runCommand() {
    const command = document.getElementById("command").value
        .trim().toLowerCase();

    const output = document.getElementById("output");

    if (command === "") {
        alert("Please enter a command!");
        return;
    }

    if (command === "help") {
        output.textContent =
            "Available commands: help, hello, status, clear";
    } else if (command === "hello") {
        output.textContent = "Welcome, Hacker!";
    } else if (command === "status") {
        output.textContent = "System Status: ONLINE";
    } else if (command === "clear") {
        document.getElementById("terminal").innerHTML = "";
        output.textContent = "";
    } else {
        output.textContent = "Command not found: " + command;
    }

    document.getElementById("command").value = "";
}