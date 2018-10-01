//import Word.js 
var Word = require('./Word.js');

//required npm packages
var inquirer = require("inquirer");


var wordBank = [
  'truckin',
  'althea',
  'bertha',
  'sugaree',
  'garcia',
  'drums',
  'space',
  'grateful',
  'dead',
  'phil',
  'brent',
  'mickey',
  'bill',
  'bobby',
  'jerry',
  'ripple',
  'alligator',
  'candyman',
  'blackbird',
  'cassidy',
  'corina',
  'deal',
  'loser',
  'slipknot',
  'supplication',
  'terrapin'
];

function newGame() {
  var randomIndex = Math.floor(Math.random() * wordBank.length - 1);
  currentWord = new Word(wordBank[randomIndex]);
  guessesLeft = 10;
  game();
}

function game() {
  if (guessesLeft > 0 && currentWord.string().indexOf("_") !== -1) {
      console.log(currentWord.string());

      inquirer.prompt([{
          type: "input",
          message: "Guess a letter:",
          name: "guess",
          validate: function (val) {
              if (val.toUpperCase() === val.toLowerCase() || val.length > 1) {
                  return "Please enter a single letter";
              }
              return true;
          }
      }]).then(function (resp) {
          var correct = currentWord.guess(resp.guess);
          if (correct) {
              console.log("Correct!");
          }
          else{
              guessesLeft--;
              console.log("Incorrect!");
              console.log(guessesLeft + " guesses left");
          }
          game();
      })
  }
  else{
      if(guessesLeft === 0){
          console.log(`
           ===============================================
          |                                               |
          |                  You Lose!                    |
          |                                               |
           ===============================================`);
      }
      if(currentWord.string().indexOf("_") === -1){
          console.log((`
          ===============================================
         |                                               |
         |                  You Win!                     |
         |     Thanks for playing Dead Head Hang Man     |              
         |                                               |
          ===============================================`));
      }
      inquirer.prompt([{
          type: "confirm",
          message: "Play again?",
          name: "isNewGame"
      }]).then(function(resp){
          if(resp.isNewGame){
              newGame();
          }
      })
  }
}

newGame();