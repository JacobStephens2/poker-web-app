// This deck is an array of objects
import FrenchDeck from "/components/FrenchDeck.js";
// Draw component returns a random index value of the array passed into it
import DrawComponent from "/actions/DrawComponent.js";

function drawCard() {
  let drawnComponent = DrawComponent(FrenchDeck.length);
  let card = document.createElement('p');
  card.innerText = FrenchDeck[drawnComponent].value + ' of ' + FrenchDeck[drawnComponent].suit;
  document.querySelector('body').append(card);
}

let DrawButton = document.createElement('button');
DrawButton.innerText = 'Draw a card';
DrawButton.addEventListener('click', drawCard)
document.querySelector('body').append(DrawButton);