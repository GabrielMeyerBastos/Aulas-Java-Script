// SPLICE:
/*
  INDEX: POSIÇÃO NO ARRAY ONDE A OPERAÇÃO COMEÇARÁ.
  QUANTIDADE: O NUMERO DE ELEMENTOS A SEREM REMOVIDOS A PARTIR DO INDEX.
  ELEMENTOS QUE DESEJA ADICIONAR NAQUELE INDEX (OPCIONAL);
*/

const num = [1, 5, 20, 10, 15];

// Remove 2 itens a partir do index 1 contando com o proprio elemento dentro do index escolhido
// num.splice(1, 2);

// Remove o item do index 1 e substitui pelo numero 40
// num.splice(1, 1, 40)

// Adiciona o numero 20 na posição 1 sem remover ninguem
// num.splice(1, 0, 20)

// Adiciona 2 itens após o index fornecido
// num.splice(1, 0, 40, "Gabriel");

// Retorno do que o splice fez, ou seja, qual item ele removeu
// const result = num.splice(2, 2, 40);
// console.log(result)


console.log(num)
