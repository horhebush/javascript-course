'use strict';

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===')

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction')

/// DOM element selction

console.log('=== DOM ELEMENT SELECTON ===')

const messageEl = document.querySelector('.message')
console.log(messageEl)

const scoreEl = document.querySelector('.score')
console.log(scoreEl)

const guessEl = document.querySelector('.guess')
console.log(guessEl)



console.log('Current message:', messageEl.textContent)
console.log('Current score', scoreEl.textContent)

messageEl.textContent = 'Hello from JavaScript!'
scoreEl.textContent = '15'

console.log('Elements updated!')

// const guessInput = document.querySelector('.guess')

// console.log('Current guess:', guessInput.value)

// guessInput.value ='10'
// console.log('Guess set to:', guessInput.value)

// const numberEl = document.querySelector('.number')
// const highscoreEl = document.querySelector('.highscore')
// const guessInput = document.quertSelector('.guess')

// numberEl.textContent = 15;
// highscoreEl.textContent =100;
// guessInput.value = 7

// console.log('Number:', numberEl)
// console.log('Highscore', highscoreEl)
// console.log('Guess:', guessInput)

///SECTION 2

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret number', secretNumber);

let score = 20;

let highscore = 0;

let playerName = 'Player'
let attempts = 0
let gameActive = true
let easySecret = Math.trunc(Math.random() * 10) + 1

console.log('Player:', playerName)
console.log('Attempts:', attempts)
console.log('Game active:', gameActive)
console.log('Easy secret number:', easySecret)

///Section 3

document.querySelector('.check').addEventListener('click', function () {
    console.log('Check button clicked!')

    const guess = Number (document.querySelector('.guess').value)
    console.log('Player guessed:', guess)

    if (guess === secretNumber) {
        console.log('Correct guess!')
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});


const guess = Number(document.querySelector('.guess').value)

console.log('Input as string:', document.querySelector('.guess').value)
console.log('Input as number:', Number(document.querySelector('.guess').value)); 
console.log('String comparison:', '15' === 15); 
console.log('Number comparison:', 15 === 15); 



///final verification code 


console.log('🎮 Game Foundation Complete!');
console.log('✅ DOM element selection working');
console.log('✅ Game state variables initialized');
console.log('✅ Event listeners responding');
console.log('✅ Basic game logic implemented');
console.log('Ready for advanced features in Hour 2!');

console.log('Secret number for testing:', secretNumber);
console.log('Try to guess it!');



// Score tracking - reduce score for worng guesses

// Add this inside your event listener, after the game logic
if (guess === secretNumber) {
           console.log('Correct guess!')
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
} else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
} else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
}

document.querySelector('.score').textContent = score;

//section 2 win or lose


if (guess === secretNumber) {
    console.log('Correct guess!')
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.message').textContent = '🎉 Panalo ka dire!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
}

if (score < 1) {
    document.querySelector('.message').textContent = '💥 You lost!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
}


//game restart

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;

});

//final verification code


console.log('🎮 Enhanced Game Complete!');
console.log('✅ Score tracking working');
console.log('✅ Win/lose conditions implemented');
console.log('✅ Game restart functionality working');
console.log('✅ Complete game experience ready');
console.log('Ready for visual polish in Hour 3!');

console.log('Test: Try to win, try to lose, then restart!');

