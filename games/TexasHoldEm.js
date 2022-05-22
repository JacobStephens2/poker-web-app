// This deck is an array of objects
import FrenchDeck from "/gameComponents/FrenchDeck.js";
// Draw component returns a random index value of the array passed into it
import DrawComponent from "/gameActions/DrawComponent.js";

let player1Hand = {
  // indexed at zero
  0: 'empty',
  1: 'empty'
}

let player1Chips = 100;

// Show player chip value
let chips = document.querySelector('#chips');
chips.innerHTML = player1Chips;

// Function to draw a card
function drawCard() {
  let drawnComponent = DrawComponent(FrenchDeck.length);
  let cardElement = document.createElement('p');
  let card = FrenchDeck[drawnComponent].value + ' of ' + FrenchDeck[drawnComponent].suit;
  cardElement.innerText = card;
  document.querySelector('#hand').append(cardElement);
  return card;
}

// Give player initial two cards
let initialHandSize = 2;
for (let i = 0; i < initialHandSize; i++) {
  player1Hand[i] = drawCard();
}

console.log(player1Hand);

// Draw a Card Button
document.querySelector('#drawACard').addEventListener('click', drawCard)

// First betting round
// Ask player if they want to bet
document.querySelector('#message').innerText = 'What do you want to do?';

let betButton = document.createElement('button');
betButton.innerText = 'Bet $2';
document.querySelector('#message').after(betButton);

let checkButton = document.createElement('button');
checkButton.innerText = 'Check';
document.querySelector('#message').after(checkButton);

let foldButton = document.createElement('button');
foldButton.innerText = 'Fold';
foldButton.addEventListener('click', fold);
document.querySelector('#message').after(foldButton);
function fold() {
  window.location.href = window.location.href;
}
