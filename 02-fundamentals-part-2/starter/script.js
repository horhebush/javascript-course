// //functions - Declarations and Expressions
// console.log(`=== FUNCTIONS ===`);

// function logger(){
//     console.log("My name is Aiken");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5, 0));

// // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // const juice3 = `Juice with 3 apples and 2 oranges.`;

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2)
// console.log(juice1);

// //Functions expression
// const calcAge = function (birthYear){
//     return 2025 - birthYear;
// }

// console.log(calcAge(2004));
// console.log(calcAge(1997));

// function introduce(firstName, lastName, age){
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
//     return introduction;
// }

// console.log(introduce('Jamaine Grace', 'Tuazon', '20'));

// function yearsUntilRetirement(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
    
//     if(retirement > 0){
//         return `${firstName} retires in ${retirement} years`;
//     }
//     else{
//         return `${firstName} has already retired`;
//     }
// }

// console.log(yearsUntilRetirement(2004, "Aiken"));

// //global scope
// const globalVar = 'I am global';

// function testScope() {
//     const localVar = 'I am local';
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(localVar);
// console.log(globalVar);


// // Coding Challenge #1
// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//     const averageScore = (score1 + score2 + score3)/3;
//     return averageScore;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   if(avgDolphins >= avgKoalas*2){
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
//   }
//   else if(avgKoalas >= avgDolphins*2){
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
//   }
//   else{
//     return `No team wins! Dolphins: ${avgKoalas}, Koals: ${avgDolphins})`
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// console.log(scoreDolphins);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));





const student1Grade = 85;
const student2Grade = 92;
const student3Grade = 78;
 
const gradess = [85, 92, 78, 96, 88];
console.log(gradess);
 
// Arrays - Creation and Access
console.log("=== ARRAYS ===");
 
// Array creation
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
 
// Different data types in same array
const mixed = ["Jonas", 27, true, friends];
console.log(mixed);
 
// Alternative way (but literal notation is preferred)
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);
 
// Array indexing starts at 0
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
 
console.log(friends[friends.length - 1]);
 
 
friends[1] = "Jay";
console.log(friends);
 
 
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991];
console.log(jonas);
 
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};
 
const ages = [calcAge(2002), calcAge(2003), calcAge(2005)];
console.log(ages);
 
 
// Array Methods - Adding Elements
 
const newLength = friends.push("Steven");
console.log(friends);
console.log(newLength);
const newLength2 = friends.push("John");
console.log(friends);
 
friends.unshift("Maria");
console.log(friends);
 
const popped = friends.pop();
const popped2 = friends.pop();
console.log(popped);
console.log(popped2);
console.log(friends);
 
const shifted = friends.shift();
console.log(shifted);
console.log(friends);
 
console.log(friends.indexOf("Micheal"));
console.log(friends.indexOf("Maria"));
console.log(friends.indexOf("Jay"));
 
console.log(friends.includes("Jay"));
console.log(friends.includes("Maria"));
 
// Array Iteration - Loops
 
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}
 
// forEach method - modern approach
friends.forEach(function (friend, index) {
  console.log(`Friend ${index + 1}: ${friend}`);
});
 
// Arrow function version (even cleaner)
friends.forEach((friend, index) => {
  console.log(`Friend ${index + 1}: ${friend}`);
});
 
 
const grades2 = [85, 92, 78, 96, 88, 74];
let total = 0;
 
for (let i = 0; i < grades2.length; i++) {
  total += grades2[i];
}
const averagee = total / grades2.length;
console.log(`Average grade: ${averagee.toFixed(2)}`);
 
let passedCount = 0;
grades2.forEach((grade) => {
  if (grade >= 70) passedCount++;
});
console.log(`${passedCount} out of ${grades2.length} students passed`);
 
 

// Coding Challenge #2 - Student Grade Manager //
 
const grades = [78, 85, 92, 67, 88, 95, 73, 82];
 
// Function to calculate average
function calculateAverage(grades) {
  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  return total / grades.length;
}
 
// Function to find highest grade
function findHighestGrade(grades) {
 let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}
 
// Function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}
 
// Function to count passing students
function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++;
    }
  }
  return count;
}
 
// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);
 
console.log("=== *******GRADE REPORT***** ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);
 
///////////////////////////////