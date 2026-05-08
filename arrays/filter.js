const num = [1, 5, 10, 15, 30, 100];

// Filter
const numfilter = num.filter((numero) => {
  return numero > 10
})

console.log(numfilter);


// find
const numfind = num.find((numero) => {
  return numero = 30
})

console.log(numfind);

//find index

const aluno = ["Gabriel", "Lucas", "Ana", "julio", "Amanda"];

const buscaaluno = aluno.findIndex((aluno) => {
  return aluno === "Ana"
})
console.log(buscaaluno)

