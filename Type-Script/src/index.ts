//Exercicio 1

function convertTemperature(temp: number, un: string): number {
  if (un == "C")
    return (temp * 1.8) + 32;
  else if (un = "F")
    return (temp - 32) * 1.8;
  return 0;
}

console.log(convertTemperature(32, "F"));


// Exercicio 2

const pessoas = [
  { nome: 'Alice', idade: 25 },
  { nome: 'Bob', idade: 15 },
  { nome: 'Charlie', idade: 30 },
  { nome: 'Diana', idade: 17 }
];

let maiores: string[] = [];

function getAdultNames(lista: { nome: string, idade: number }[]): string[] {

  const maioresDezoito = lista.filter(pessoa => pessoa.idade >= 18).map(pessoa => pessoa.nome);

  return maioresDezoito
}
console.log(getAdultNames)
