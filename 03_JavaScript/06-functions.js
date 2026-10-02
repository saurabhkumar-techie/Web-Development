function hello() {
    console.log("Hello");
}

hello();

function greet() {
    console.log("Good morning");
}

greet();

function add() {
    let a = 10;
    let b = 20;

    console.log(a + b);
}

add();

function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(10, 20);
addNumbers(5, 15);

function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log(result);

function square(num) {
    return num * num;
}

console.log(square(5));

function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Not adult";
    }
}

console.log(checkAge(19));
console.log(checkAge(15));

function student(name, course) {
    console.log("Name: " + name);
    console.log("Course: " + course);
}

student("Saurabh", "BCA");

let sum = function(a, b) {
    return a + b;
};

console.log(sum(10, 5));

let sub = (a, b) => {
    return a - b;
};

console.log(sub(20, 8));