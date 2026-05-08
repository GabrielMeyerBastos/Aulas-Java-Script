//Map

const aluno = ["Gabriel", "Lucas", "Ana", "julio", "Amanda"];

//devolve uma nova array com o novo item dentro, diferente do for each
const resultado = aluno.map((aluno) => {
  return aluno + " Online"
})

console.log(resultado);

const valores = [10, 20, 15, 21, 67];

const valoresmult = valores.map((numero) => {
  return numero * 2
})

console.log(valoresmult);

