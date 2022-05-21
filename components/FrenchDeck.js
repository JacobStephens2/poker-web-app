// This French Deck creation code is from Walter Guevara
// at https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

const suits = ["spades", "diamonds", "clubs", "hearts"];

var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function createFrenchDeck() {
  let deck = new Array();

  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { value: values[x], suit: suits[i] };
      deck.push(card);
    }
  }

  return deck;
}

const FrenchDeck = createFrenchDeck();

export default FrenchDeck;