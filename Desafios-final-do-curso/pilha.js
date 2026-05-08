/*
# Crie um algoritiomo de pilha(array).

  - 1. Deverá ter a função para retornar o tamanho da pilha.
  - 2. Função para adicionar um elemento na pilha.
  - 3. Função para retornar qual é o último elemento da pilha.
  - 4. Função para remover o último elemento da pilha e retornar qual foi o elemento removido.
  - 5. Função para limpar a pilha e zerar ela.
*/
//
const itensarray = ["carro", "moto", "barco", "jetsky", "trator", "ônibus", "bicicleta"];


// 1. função que retorna o tamanho da pilha.
function tamanhopilha(itens) {

  let tamanho = 0;

  tamanho = itens.length;

  return tamanho
}

const tamanhoarray = tamanhopilha(itensarray);

// 2. função para adicionar um elemento na pilha.

function additem(array, item) {

  array.push(item);

}

additem(itensarray, "Portão");

// 3. função para retornar qual é o ultimo elemento da pilha

function ultimoitem(array) {

  let posicao = array.length;

  let ultimoit = array[posicao - 1];

  return ultimoit
}

// 4. função para remover o último elemento da pilha e retornar qual foi o elemento removido

function removeitem(array) {

  let position = array.length

  let removed = array.splice((position - 1), 1)

  return removed
}

// 5. Função para limpar a pilha e zerar ela.

function removeallitems(array) {

  let position = array.length

  let clear = array.splice(0, position)

  return clear
}

console.log(removeallitems(itensarray))
console.log(itensarray)
