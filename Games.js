function openTexasHoldEm() {
  // Retitle page with game name
  gameName = "Texas Hold'Em"
  document.querySelector('h1').innerText = gameName;
  document.querySelector('title').innerText = gameName;
  // Remove game button
  document.querySelector('button[onclick="openTexasHoldEm()"]').remove();
  // Link game script
  const TexasHoldEmScript = document.createElement('script');
  TexasHoldEmScript.src = "/games/TexasHoldEm.js";
  TexasHoldEmScript.type = "module";
  document.querySelector('head').append(TexasHoldEmScript);
}