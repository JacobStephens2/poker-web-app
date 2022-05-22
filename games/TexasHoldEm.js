// This deck is an array of objects
import FrenchDeck from "/gameComponents/FrenchDeck.js";
// Draw component returns a random index value of the array passed into it
import DrawComponent from "/gameActions/DrawComponent.js";

let player1Hand = {
  // indexed at zero
  0: '',
  1: ''
}

// Initialize values
sessionStorage.setItem('player1Hand', JSON.stringify(player1Hand));

let playerOneHand = localStorage.getItem('player1Hand');
console.log(JSON.parse(playerOneHand));

let sharedCards = {
  // indexed at zero
  0: '',
  1: '',
  3: '',
  4: '',
  5: ''
}
let handSize = 2;
let player1Chips = 100;
let potValue = 0;

// Show player chip value
let chips = document.querySelector('#chips');
chips.innerHTML = player1Chips;

// Show pot value
let pot = document.querySelector('#pot');
pot.innerHTML = potValue;

// Give player two cards
function givePlayerCards(number) {
  for (let i = 0; i < number; i++) {
    player1Hand[i] = drawCardToHand();
  }
}
givePlayerCards(2);

// Function to draw a card to hand
function drawCardToHand() {
  let drawnComponent = DrawComponent(FrenchDeck.length);
  let cardElement = document.createElement('p');
  let card = FrenchDeck[drawnComponent].value + ' of ' + FrenchDeck[drawnComponent].suit;
  cardElement.innerText = card;
  document.querySelector('#hand').append(cardElement);
  return card;
}

console.log(player1Hand);

// First betting round
// Ask player if they want to bet
document.querySelector('#actions').innerText = 'What do you want to do?';

// Fold Button
let foldButton = document.createElement('button');
foldButton.innerText = 'Fold';
foldButton.addEventListener('click', fold);
document.querySelector('#actions').after(foldButton);
function fold() {
  // remove cards from hand
  document.querySelector('#hand').innerText = '';
  // remove cards from shared cards
  document.querySelector('#sharedCards').innerText = '';
  // add two new cards to hand
  givePlayerCards(2);
  // reveal the flop button
  flopButton.hidden = false;
  // empty the pot
  potValue = 0;
  pot.innerHTML = potValue;

}

// Bet button
let betButton = document.createElement('button');
betButton.innerText = 'Bet $2';
betButton.addEventListener('click', bet);
document.querySelector('#actions').after(betButton);
function bet() {
  // remove $2 from player chips
  player1Chips = player1Chips - 2;
  chips.innerHTML = player1Chips;
  // add $2 to pot
  potValue = potValue + 2;
  pot.innerHTML = potValue;
}

// Check button
let checkButton = document.createElement('button');
checkButton.innerText = 'Check';
document.querySelector('#actions').after(checkButton);

// Draw the flop button
let flopButton = document.createElement('button');
flopButton.innerText = 'Draw the Flop';
flopButton.addEventListener('click', drawTheFlop);
document.querySelector('#nextRound').after(flopButton);
function drawTheFlop() {
  let cardsToDraw = 3;
  for (let i = 0; i < cardsToDraw; i++) {
    sharedCards[i] = drawSharedCard();
  }
  flopButton.hidden = true;
}

console.log(sharedCards);

// Function to draw a card to shared
function drawSharedCard() {
  let drawnComponent = DrawComponent(FrenchDeck.length);
  let cardElement = document.createElement('p');
  let card = FrenchDeck[drawnComponent].value + ' of ' + FrenchDeck[drawnComponent].suit;
  cardElement.innerText = card;
  document.querySelector('#sharedCards').append(cardElement);
  return card;
}