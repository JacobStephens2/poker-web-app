// This deck is an array of objects
import FrenchDeck from "/gameComponents/FrenchDeck.js";
// Draw component returns a random index value of the array passed into it
import DrawComponent from "/gameActions/DrawComponent.js";

let playerOneHand = {
  // indexed at zero
  0: 'empty',
  1: 'empty'
}

// Function to draw a card
function drawCard() {
  let drawnComponent = DrawComponent(FrenchDeck.length);
  let cardElement = document.createElement('p');
  let card = FrenchDeck[drawnComponent].value + ' of ' + FrenchDeck[drawnComponent].suit;
  cardElement.innerText = card;
  document.body.append(cardElement);
  return card;
}

// Give player initial two cards
let message = document.createElement('p').innerText = 'Your Initial Hand: ';
document.querySelector('h1').after(message);
let initialHandSize = 2;
for (let i = 0; i < initialHandSize; i++) {
  playerOneHand[i] = drawCard();
}

console.log(playerOneHand);

// Draw a Card Button
let DrawButton = document.createElement('button');
DrawButton.innerText = 'Draw a card';
DrawButton.addEventListener('click', drawCard)
document.body.append(DrawButton);

// First betting round