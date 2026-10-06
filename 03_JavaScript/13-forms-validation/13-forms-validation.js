let form = document.getElementById("myForm");

let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");

let message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (name.value == "") {
        message.innerText = "Please enter your name";
        return;
    }

    if (email.value == "") {
        message.innerText = "Please enter your email";
        return;
    }

    if (password.value == "") {
        message.innerText = "Please enter your password";
        return;
    }

    if (password.value.length < 6) {
        message.innerText = "Password must be at least 6 characters";
        return;
    }

    message.innerText = "Form submitted successfully";

});