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
function drawCardToHand() {
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
  player1Hand[i] = drawCardToHand();
}

console.log(player1Hand);

// Draw a Card Button
document.querySelector('#drawACard').addEventListener('click', drawCardToHand)
document.querySelector('h1').after(DrawButton);

// First betting round
// Ask player if they want to bed