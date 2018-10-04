
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.
function Generator(possibilities) {
  // YOUR CODE HERE
  //this.diceResult = Math.floor((Math.random() * 6) + 1);
//this.dice = dice;
//this.eightBall = eightBall;
//diceResult: function(){
this.value = function() {
var randomNumber = Math.floor((Math.random() * possibilities.length));

var choice = possibilities[randomNumber];
return choice;
  }
}

//var diceRoll = new Generator(randomNum);

var diceRollGenerator = new Generator(['1','2','3','4','5','6']);
var eightBallGenerator = new Generator(['yes','no']);
//Generator.diceResult();

console.log (diceRollGenerator);

// TODO: Initialise diceRollGenerator and eightBallGenerator
// using the constructor notation and the Generator object
// you just created
//const diceRollGenerator = null;
//var diceRollGenerator = new Generator();
//return diceResult;

//var diceRollGenerator = new Object();
//diceRollGenerator.diceResult = Generator(randomNum);

//const eightBallGenerator = null;

function handleDiceRoll() {

  const resultElement = document.getElementById('diceResult');
  const result = diceRollGenerator.value();
  resultElement.innerHTML = result;
}
//printNumber(diceResult);

function handleEightBallShake() {
  const resultElement = document.getElementById('eightBallResult');

  // TODO: call a method on eightBallGenerator to populate result with a random value
  const result = eightBallGenerator.value();
  resultElement.innerHTML = result;
}

document.addEventListener("DOMContentLoaded", function() {
  // this code block runs when the page finishes loading
  // and attaches listeners for button clicks
  // e.g. when the diceButton is clicked, it will run the handleDiceRoll function
  const diceButton = document.getElementById('diceButton');
  if (diceButton) {
    diceButton.addEventListener('click', handleDiceRoll);
  }

  const eightBallButton = document.getElementById('eightBallButton');
  if (eightBallButton) {
    eightBallButton.addEventListener('click', handleEightBallShake);
  }
});
