// FUNÇÕES
/*
function mostrarnome() {
  console.log("Olá, seja bem vindo ao sistema!")
}

mostrarnome();

function GeraNumRandom() {
  return Math.random();
}

console.log(GeraNumRandom());

function dataAtual() {
  const date = new Date();
  return date.getFullYear();
}

const date = dataAtual();
console.log(date);
*/


/*
function funmostranome(nome) {
  console.log(`Seja bem vindo ${nome} ao sistema`)
}

funmostranome("Gabriel")


const nota1 = 5;
const nota2 = 6;
const nota3 = 9;

function calculomedia(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;

  return media;
}
const resultado = calculomedia(nota1, nota2, nota3);

const mediagabriel = calculomedia(10, 9, 5);

console.log(`A média de Gabriel é: ${mediagabriel}`);

console.log(`A média de suas notas é: ${resultado}`);
*/

//FUNÇÕES ANÔNIMAS

let soma = function (num1, num2) {
  return num1 + num2
}

let multi = function (num1, num2) {
  return num1 * num2
}

console.log(`A soma de 5 e 10 é: ${soma(5, 10)}`)
console.log(`A multiplicação de 5 e 10 é: ${multi(5, 10)}`)
