//Calculando preço total de um carrinho de compras

const carrinho = [
  {
    item: "Arroz",
    validade: "19/02/2026",
    preco: 9.90,
    marca: "Prato Fino",
  },
  {
    item: "Refrigerante",
    validade: "10/12/2030",
    preco: 14.50,
    marca: "Guaraná Jesus",
  },
  {
    item: "Carne",
    validade: "05/01/2027",
    preco: 98.17,
    marca: "Friboi",
  },
]

/*
let total = 0;

carrinho.forEach((itens) => {
  total += itens.preco;
})

console.log(total)
*/


function calculartotaldocarrinho(carrinho) {
  let total = 0;

  carrinho.forEach((itens) => {
    total += itens.preco
  })

  return total;
}

const resultado = calculartotaldocarrinho(carrinho);

function totalitenscarrinho(carrinho) {
  let quantidadeitens = 0;
  carrinho.forEach((item) => {
    quantidadeitens += 1;
  })

  return quantidadeitens
}

const totalitens = totalitenscarrinho(carrinho);

console.log(`Seu carrinho possui ${totalitens} itens e o o custo será de R$${resultado} reais!`)
