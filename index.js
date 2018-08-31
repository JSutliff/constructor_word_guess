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

var randomIndex = Math.floor(Math.random() * wordBank.length - 1);

