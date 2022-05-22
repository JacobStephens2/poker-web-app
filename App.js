function getNavContents() {
  fetch('/elements/navContents.html')
    .then(response=> response.text())
    .then(text=> document.querySelector('nav').innerHTML = text);
}
getNavContents();

function getHeadContents() {
  fetch('/elements/headContents.html')
    .then(response=> response.text())
    .then(text => document.head.innerHTML = document.head.innerHTML + text);
}
getHeadContents();