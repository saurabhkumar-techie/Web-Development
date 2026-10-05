let button = document.getElementById("btn");

let message = document.getElementById("message");

button.addEventListener("click", function() {
    message.innerText = "Button was clicked!";
});


let name = document.getElementById("name");

let output = document.getElementById("output");

name.addEventListener("input", function() {
    output.innerText = "Hello " + name.value;
});


let changeBtn = document.getElementById("changeBtn");

let text = document.getElementById("text");

changeBtn.addEventListener("click", function() {
    text.innerText = "Text has been changed!";
});


document.addEventListener("keydown", function(event) {
    console.log("You pressed: " + event.key);
});