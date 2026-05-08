// Array de objetos

const alunos = [
  {
    nome: "Gabriel",
    idade: 23,
    curso: "Engenharia de Software",
  },
  {
    nome: "Ana",
    idade: 24,
    curso: "Musicalização",
  },
]

//busca o objeto através do index e extrai todas as informações
console.log(alunos[1]);

//extrai uma informação de todos os objetos
alunos.forEach((aluno) => {
  console.log(aluno.nome);
})

// busca objeto através do index e extrai a informação especifica
console.log(alunos[1].curso);
