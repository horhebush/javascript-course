// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("GUMANA KA");

// console.log("==== VARIABLES ====");
// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31; // We can change let variables
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);


// var job = "programmer";
// job = "teacher";
// console.log(job);


// const country = "Portugal";
// const language = "Portuguese";
// const population = 10;

// let age1 = 25;
// age1 = 26;

// let firstName1 = "Sarah";
// let myCurrentJob = "teacher";


// console.log("==== DATA TYPES ====");

// let age2 = 23;
// console.log(age2);
// console.log(typeof age2);

// let firstName2 = "Jonas";
// console.log(firstName2);
// console.log(typeof firstName2);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// //dynamic variable

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "HelNow I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable);


// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);


console.log("==== MATH OPERATORS ====");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math operations");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 20 / 4);
console.log("Exponentiation:", 2 ** 3);


const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);


console.log("Hello " + "World" + "!");
console.log("I am " + 25 + " years old")

console.log("==== ASSIGNMENT OPERATORS ====");


let x = 10 + 5;
console.log("x starts as:", x)

x += 10;
console.log("After x += 10:", x)

x *= 4;
console.log("After x *= 4:", x)

x /= 2;
console.log("After x /= 2:", x)

x++;
x--;
console.log("After x-- twice:", x)



console.log("=== COMPARISON OPERATORS ===")

console.log("Age Comparision:")
console.log(ageJonas >ageSarah)
console.log(ageSarah >= 18);
console.log(ageJonas <30);

console.log("Number comaparisons:")
console.log(25 > 20)
console.log(15 < 10)
console.log(18 >= 18)
console.log(16 <= 15);


const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge)

const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older:", isJonasOlder)


console.log("Complex comparision:")
console.log(now - 1991 > now -2018);



console.log("=== OPERATOR PRECEDENCE ===")

let z, y;
z = y = 25 - 10 - 5;
console.log(z, y)


const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



console.log("=== Coding Challenge #1 - BMI Calculator")

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// 1. Calculate BMIs

let markBMI
markBMI = massMark/(heightMark ** 2)

let johnBMI
johnBMI = massJohn/(heightJohn ** 2)

// 2. Create markHigherBMI variable
const markHigherBMI = markBMI > johnBMI;
console.log("Mark has higher BMI than John", markHigherBMI)

// 3. Log results to console

console.log("Mark BMI is ", markBMI)
console.log("John BMI is ", johnBMI)

