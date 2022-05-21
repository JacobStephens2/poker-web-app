function openTexasHoldEm() {
  gameName = "Texas Hold'Em"
  document.querySelector('h1').innerText = gameName;
  document.querySelector('title').innerText = gameName;
  document.querySelector('#playTexasHoldEm').remove();
}