// // Remember, we're gonna use strict mode in all scripts now!
// 'use strict';


// console.log('=== DEVELOPMENT ENVIRONMENT SETUP ===');

// const messyExample = function (name, age) {
//   if (age >= 18) {
//     return 'Hello ' + name + ', you are an adult';
//   } else {
//     return 'Hello ' + name + ', you are a minor';
//   }
// };

// console.log('Current messy code example:', messyExample('Jorge', 25));
// console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');

// //Extension Installation Test
// function testExtensions() {
//   const extensionTests = [
//     { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
//     { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
//     {
//       name: 'Auto Rename Tag',
//       status: 'installed',
//       purpose: 'HTML efficiency',
//     },
//   ];

//   return extensionTests;
// }

// const extensionStatus = testExtensions();
// console.log('Extension installation status:', extensionStatus);

// //Testing Prettier Formatting
// const prettierTest = {
//   firstName: 'Sarah',
//   lastName: 'Duterte',
//   skills: ['JavaScript', 'React', 'Node.js'],
//   isActive: true,
// };
// const messyFunction = function (x, y, z) {
//   if (x > 0 && y > 0) {
//     return x + y + z;
//   } else {
//     return 0;
//   }
// };

// const messyArrow = items => {
//   return items.map(item => {
//     return item.toUpperCase();
//   });
// };

// console.log(
//   'Before Prettier formatting - this code works but looks unprofessional'
// );

// //Live Server Setup and Testing

// // Test 1: Basic live reload
// let liveServerTest = "Initial message - change #1";
// console.log("Live Server test:", liveServerTest);

// // Test 2: Time-based updates
// const timeStamp = new Date().toLocaleTimeString();
// const updateCount = 1;
// console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // Test 3: Function testing
// function demonstrateLiveReload() {
//   const randomColor = ["red", "blue", "green", "purple", "orange"][
//     Math.floor(Math.random() * 5)
//   ];
//   const message = `Live Server rocks! Random color: ${randomColor}`;

//   console.log(message);
//   return message;
// }

// demonstrateLiveReload();

// //Execise
// function showCurrentTime() {
//   const now = new Date().toLocaleTimeString();
//   console.log("Current time:", now);
//   return now;
// }

// showCurrentTime();

// //Code Snippets Testing
// console.log("Testing snippet functionality - cl + Tab created this!");


// function testSnippets() {
//   console.log("Function created with snippet - func + Tab!");
//   return "Snippets working perfectly!";
// }

// testSnippets();

// const snippetTest = (message) => {
//   console.log(`Arrow function from snippet: ${message}`);
//   return message;
// };

// snippetTest("Snippets save so much typing time!");

// //Final verification
// //environment setup verification
// console.log("Professional Development Environment Complete!");
// console.log("Prettier: Automatic code formatting");
// console.log("Live Server: Automatic browser refresh");
// console.log("Snippets: Fast code generation");
// console.log("Extensions: Enhanced productivity");
// console.log("Ready for professional JavaScript development!");

// // Calculate time savings
// function calculateTimeSavings() {
//   const dailyConsoleLogs = 50;
//   const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
//   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
//   const monthlySavings = dailySavings * 22; // work days

//   console.log(`Daily keystrokes saved: ${dailySavings}`);
//   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

//   return { daily: dailySavings, monthly: monthlySavings };
// }

// calculateTimeSavings();



console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

console.log(
  "Key insight: Professional developers think systematically, not just code"
);
console.log("Goal: Transform from beginner to professional problem-solver");

/*
STEP 4: IMPLEMENT AND TEST
- Code the solution step by step with testing
- Start simple, test each piece, combine gradually
*/
console.log("4-Step Framework: Understand → Divide → Research → Implement");

//Real-word problem
//PROBLEM STATEMENT:
/*Given an array of temperatures from one day, calculate the temperature amplitude. 
Keep in mind that sometimes there might be a sensor error.

Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]*/

//implementation
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
}

// Calculate time savings
function calculateTimeSavings() {
  const dailyConsoleLogs = 50;
  const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
  const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
  const monthlySavings = dailySavings * 22; // work days
const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);

  console.log(`Daily keystrokes saved: ${dailySavings}`);
  console.log(`Monthly keystrokes saved: ${monthlySavings}`);
console.log(
  "Problem-solving framework applied successfully to extended challenge!"
);

  return { daily: dailySavings, monthly: monthlySavings };
}
////////////////////////////////////
// PROBLEM-SOLVING FRAMEWORK MASTERY

calculateTimeSavings();
/*
FRAMEWORK SUCCESS ANALYSIS:
- ✅ Solved complex problems systematically
- ✅ Broke problems into manageable pieces
- ✅ Applied research when needed
- ✅ Implemented and tested successfully
- ✅ Adapted to changing requirements efficiently
*/

console.log("🎯 Framework mastered - ready for independent problem solving!")