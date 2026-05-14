// ===== DESAFIO 1 =====

const cargos = ["fullstack", "frontend", "backend", "mobile"];

const backendindex = cargos.indexOf("backend");

cargos.splice(backendindex, 1);

console.log(cargos);

// ===== DESAFIO 2 =====

const nomes = ["Alice", "Lucas", "Carol", "David", "Henrique"];

const buscanome = "Henrique";
const indexhenrique = nomes.indexOf(buscanome);

if (indexhenrique == -1) {
  console.log(`O nome ${buscanome} não existe dentro da lista!`)
} else {
  console.log(`O nome ${buscanome} foi encontrado na lista e está na posição ${indexhenrique}!`)
}

// ===== DESAFIO 3 =====

const num = [5, 15, 23, 2];
let sum = 0;

num.forEach((numero) => {
  sum += numero
})

console.log(sum);

// ===== DESAFIO 4 =====

const num1 = [6, 12, 5, 9, 14, 27];
const mult3 = [];

num1.forEach((numero) => {
  if (numero % 3 == 0) {
    mult3.push(numero)
  }

})
console.log(mult3);

// ===== DESAFIO 5 =====

const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];

const result = [];

palavras.forEach((palavra) => {
  if (palavra.length >= 5) {
    result.push(palavra)
  }
})

console.log(result)
