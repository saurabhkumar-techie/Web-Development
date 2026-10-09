// let and const

let name = "Saurabh";
const age = 19;

console.log(name);
console.log(age);


// Template literals

let course = "BCA";

console.log(`My name is ${name}`);
console.log(`I am studying ${course}`);


// Default parameter

function greet(name = "Student") {
    console.log("Hello " + name);
}

greet("Saurabh");
greet();


// Arrow function

let add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// Short arrow function

let square = num => num * num;

console.log(square(5));


// forEach

let fruits = ["Apple", "Mango", "Banana"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});


// Map

let numbers = [1, 2, 3, 4, 5];

let double = numbers.map(num => num * 2);

console.log(double);


// Spread operator

let a = [10, 20, 30];
let b = [...a, 40, 50];

console.log(b);


// Destructuring

let student = {
    name: "Rahul",
    age: 20
};

let { name: studentName, age: studentAge } = student;

console.log(studentName);
console.log(studentAge);


// Class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(this.name);
        console.log(this.age);
    }
}

let p1 = new Person("Saurabh", 19);

p1.show();


// Change HTML content

document.getElementById("result").innerText =
    `My name is ${name} and I am learning ES6.`;