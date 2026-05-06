//Includes: verifica se existe o item no array e devolve em bool

const nomes = ["Gabriel", "Ana", "Lucas"];

const verificanome = nomes.includes("Gabriel");
console.log(verificanome)


//forEach

const valores = [10, 20, 30]

nomes.forEach((nome) => {
  console.log(`Olá ${nome}!`)
})

valores.forEach((valor) => {
  console.log(`${valor} multiplicado por 2 é igual a: ${valor * 2}`)
})
