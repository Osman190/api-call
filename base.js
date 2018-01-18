
let  body = document.querySelector('body');
let div = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', listen)

function listen() {

fetch("https://api.chucknorris.io/jokes/random")
  .then(response => {
    return response.json();
  })
  .then( chuckFun => {
    div.innerHTML = chuckFun.value;
    body.appendChild(div);
  }

)}
