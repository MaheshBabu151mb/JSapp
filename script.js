function displayGreeting() {
    var name = prompt("What's your name?");
    var greetingMessage = "Hello, " + name + "! Welcome to JavaScript!";
    document.getElementById("greeting").innerHTML = greetingMessage;
  }
  