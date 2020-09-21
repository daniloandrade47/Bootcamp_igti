window.addEventListener('load', start);

// declara as variáveis globais
var red = null;
var green = null;
var blue = null;
var rValue = null;
var gValue = null;
var bValue = null;
var divColor = null;

// inicia o carregamento da DOM e seus elementos
function start() {
  red = document.querySelector('#colRed');
  green = document.querySelector('#colGreen');
  blue = document.querySelector('#colBlue');
  rValue = document.querySelector('#numRed');
  gValue = document.querySelector('#numGreen');
  bValue = document.querySelector('#numBlue');
  addEvents();
}

// função para chamar os eventos que usaremos em cada elemento
function addEvents() {
  red.addEventListener('change', changeRed);
  green.addEventListener('change', changeGreen);
  blue.addEventListener('change', changeBlue);
}

// função do evento da cor: vermelha
// recupera o evento change relativo ao número da cor: console.log(rValue.value);
function changeRed(event) {
  rValue.value = event.target.value;
  changeColor();
}

// função do evento da cor: verde
function changeGreen(event) {
  gValue.value = event.target.value;
  changeColor();
}

// função do evento da cor: azul
function changeBlue(event) {
  bValue.value = event.target.value;
  changeColor();
}

// função que alterna as cores e exibe na tela
function changeColor() {
  r = rValue.value;
  g = gValue.value;
  b = bValue.value;
  divColor = document.querySelector('#colors');
  divColor.style.backgroundColor = `rgb(${r},${g},${b})`;
}
