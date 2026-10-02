console.log("Numbers from 1 to 5");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("Even numbers");

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log("While loop");

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

console.log("Do while loop");

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

console.log("Table of 5");

for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}

console.log("Reverse");

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

console.log("Break");

for (let i = 1; i <= 10; i++) {
    if (i == 6) {
        break;
    }

    console.log(i);
}

console.log("Continue");

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }

    console.log(i);
}