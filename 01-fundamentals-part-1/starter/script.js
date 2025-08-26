// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!

// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);
// // console.log("GUMANA KA");

// // console.log("==== VARIABLES ====");
// // let firstName = "Jonas";
// // console.log(firstName);

// // let age = 30;
// // age = 31; // We can change let variables
// // console.log(age);

// // const birthYear = 1991;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);


// // var job = "programmer";
// // job = "teacher";
// // console.log(job);


// // const country = "Portugal";
// // const language = "Portuguese";
// // const population = 10;

// // let age1 = 25;
// // age1 = 26;

// // let firstName1 = "Sarah";
// // let myCurrentJob = "teacher";


// // console.log("==== DATA TYPES ====");

// // let age2 = 23;
// // console.log(age2);
// // console.log(typeof age2);

// // let firstName2 = "Jonas";
// // console.log(firstName2);
// // console.log(typeof firstName2);

// // let javascriptIsFun = true;
// // console.log(javascriptIsFun);
// // console.log(typeof javascriptIsFun);

// // let year;
// // console.log(year);
// // console.log(typeof year);

// // //dynamic variable

// // let dynamicVariable = 23;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // dynamicVariable = "HelNow I'm a string!";
// // console.log(dynamicVariable, typeof dynamicVariable);


// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);


// console.log("==== MATH OPERATORS ====");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 20 / 4);
// console.log("Exponentiation:", 2 ** 3);


// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);


// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old")

// console.log("==== ASSIGNMENT OPERATORS ====");


// let x = 10 + 5;
// console.log("x starts as:", x)

// x += 10;
// console.log("After x += 10:", x)

// x *= 4;
// console.log("After x *= 4:", x)

// x /= 2;
// console.log("After x /= 2:", x)

// x++;
// x--;
// console.log("After x-- twice:", x)



// console.log("=== COMPARISON OPERATORS ===")

// console.log("Age Comparision:")
// console.log(ageJonas >ageSarah)
// console.log(ageSarah >= 18);
// console.log(ageJonas <30);

// console.log("Number comaparisons:")
// console.log(25 > 20)
// console.log(15 < 10)
// console.log(18 >= 18)
// console.log(16 <= 15);


// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge)

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder)


// console.log("Complex comparision:")
// console.log(now - 1991 > now -2018);



// console.log("=== OPERATOR PRECEDENCE ===")

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y)


// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);



// console.log("=== Coding Challenge #1 - BMI Calculator")

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // 1. Calculate BMIs

// let markBMI
// markBMI = massMark/(heightMark ** 2)

// let johnBMI
// johnBMI = massJohn/(heightJohn ** 2)

// // 2. Create markHigherBMI variable
// const markHigherBMI = markBMI > johnBMI;
// console.log("Mark has higher BMI than John", markHigherBMI)

// // 3. Log results to console

// console.log("Mark BMI is ", markBMI)
// console.log("John BMI is ", johnBMI)


console.log("=== ES6 Template Literals ===")

console.log(`I'm ${2037 - 1991} years old.`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: $5 > 3}`);

console.log(`Just a regular string...`);

console.log(`String
    multiple
    lines`);

const myName = "Horhe";
const myAge = 21;
const myJob = "Scrum Master";
const currentYear = 2024;


//multiline strings
console.log(
  "String with \n\
multiple \n\
lines"
);

// new way natural
console.log(`String
multiple
lines`);

//if else statement
const age10 = 15;
if (age10 >= 18 ) {
  console.log(`Sarah can start a driving license`);
}
else{
  const yearsLeft = 18 - age10;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

//Truthy & Falsy Values
console.log(Boolean(0));//falsy values
console.log(Boolean(undefined));//falsy values
console.log(Boolean("Jonas"));//truthy values
console.log(Boolean({}));//truthy values
console.log(Boolean(""));//falsy values



// Type Conversion and Coercion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

//automatic type coercion
console.log('I am ' + 20 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' * '2');

let n = '1' + 1;
console.log(n);

n = n -1;
console.log(n);

// type conversion = explicit/manual (recommended)
// type coercion = implicit/automatic

// Equality - Strict
const age100 = '18';
if (age100 === 18) console.log('You just became an adult (strict)');
if (age100 == 18) console.log('You just became an adult (loose)');

console.log('18' === 18);
console.log('18' == 18); //coercion happens
console.log(18 === 18);

// == checks only the values
// === checks the value and the type

//why == can be dangerous
console.log('0' == 0);
console.log(0 == false);
console.log('0' == false);
console.log(null == undefined); //special case

console.log('' == 0);
console.log('    ' == 0);

// //best practice
const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23){
  console.log("Coll! 23 is an Amazing Number");
}
else if (favourite == 23){
console.log("23 is also a Cool Number");
}
else if (favourite === 9){
console.log("9 is also a Cool Number");
}
else{
  console.log('Number is not 23 or 7 or 9');
}

if(favourite !== 23) console.log('Why not 23?');

// Logical operators

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(`AND OPERATOR: ${hasDriverLicense && hasGoodVision}`);
console.log(`OR OPERATOR: ${hasDriverLicense || hasGoodVision}`);
console.log(`NOT OPERATOR: ${!hasDriverLicense}`);

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && !isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log(`Jorge is able to drive(NOT REALLY)`);
} else{
  console.log(`Someone else should drive`);
}

//more complex scenarios
const age1000 = 20;
const hasPermission = true;
const hasExperience = false;

if ((age1000 >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive");
} else {
  console.log("Not approved to drive");
}

// Create a club entry system with these rules: age >= 21 and hasID OR isVIP

const age10000 = 19; // Try different values
const hasID = true; // Try different values
const isVIP = false; // Try different values

// Your logic here:
if ((age10000 >= 21 && hasID) || isVIP) {
  console.log('Welcome to the club!');
} else {
  console.log('Sorry, you cannot enter');
}


//The Conditional (Ternary) Operator

const age = 23;

//basic ternary:  condition ? valueiftrue : valueiffalse

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

//if else statement
let drink2;
if (age >= 18) {
  drink2 = `wine`;
}else{
  drink2 = `water`;
}
console.log(drink2);


console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);

// Final Challenge: Tip Caalculator

// Coding Challenge #4

const bill = 500;// Test with 275, 40, and 430

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
