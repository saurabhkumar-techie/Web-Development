let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits.length);

fruits.push("Orange");

console.log(fruits);

fruits.pop();

console.log(fruits);

fruits.unshift("Grapes");

console.log(fruits);

fruits.shift();

console.log(fruits);

fruits[1] = "Pineapple";

console.log(fruits);

let numbers = [10, 20, 30, 40, 50];

console.log(numbers[0]);
console.log(numbers[3]);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

let students = ["Rahul", "Aman", "Saurabh", "Rohit"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log(students.includes("Saurabh"));
console.log(students.includes("Ajay"));

let newNumbers = [5, 10, 15, 20];

console.log(newNumbers.indexOf(15));

console.log(newNumbers.join(", "));

let colors = ["Red", "Blue", "Green"];

console.log(colors);

colors.push("Yellow");

console.log(colors);