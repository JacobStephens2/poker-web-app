// This deck is an array of objects
import FrenchDeck from "/components/FrenchDeck.js";
// Draw component returns a random index value of the array passed into it
import DrawComponent from "/actions/DrawComponent.js";

// Function to draw a card
function drawCard() {
  let drawnComponent = DrawComponent(FrenchDeck.length);
  let card = document.createElement('p');
  card.innerText = FrenchDeck[drawnComponent].value + ' of ' + FrenchDeck[drawnComponent].suit;
  document.body.append(card);
}

// Give player initial two cards
let message = document.createElement('p').innerText = 'Your Initial Hand: ';
document.querySelector('h1').after(message);
let initialHandSize = 2;
for (let i = 0; i < initialHandSize; i++) {
  drawCard();
}

// Draw a Card Button
let DrawButton = document.createElement('button');
DrawButton.innerText = 'Draw a card';
DrawButton.addEventListener('click', drawCard)
document.body.append(DrawButton);