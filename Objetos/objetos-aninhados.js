
//objeto com propriedades aninhadas

const pessoa = {
  nome: "Gabriel",
  idade: 23,
  cargo: "Backend",
  endereco: {
    rua: "AV. Tarumãs",
    numero: 50,
    bairro: "Jardim Celeste",
    cidade: "Sinop",
    estado: "MT",
  },
}

console.log(pessoa.endereco.estado);
