// =-=-=-= Nivel 1  =-=-=-=

// 1:

function calcularIdade(anoNascimento: number): number {
  const anoAtual: number = 2026;
  const idade = anoAtual - anoNascimento;
  return idade;
}

// 2:

function parOuImpar(num: number): "par" | "impar" {
  if (num % 2 == 0) return "par";
  return "impar";
}

// 3:

function convertTemperature(temp: number, un: "C" | "F"): number {
  if (un == "C") {
    return (temp * 1.8) + 32;
  };
  return (temp - 32) / 1.8;
}

// 4:

function saudar(nome: string, idade?: number): string {
  let saudacao: string = ``;
  if (idade == undefined) {
    saudacao = `Olá, ${nome}`;
  }
  else {
    saudacao = `Olá, ${nome}, você tem ${idade} anos`;
  }
  return saudacao;
}

// =-=-=-= Nivel 2  =-=-=-=

// 5:

const notas1: number[] = [10, 5, 9, 2];
const notas2: Array<number> = [10, 5, 9, 2];

function calcularMedia1(notas: number[]): number {
  let notasMedia: number = 0;

  notas.forEach(element => {
    notasMedia += element;
  });
  return notasMedia / notas.length;
}

function calcularMedia2(notas: Array<number>): number {
  let notasMedia: number = 0;

  notas.forEach(element => {
    notasMedia += element;
  });
  return notasMedia / notas.length;
}

// 6:

interface Pessoa {
  nome: string;
  idade: number;
}

const Pessoas: Pessoa[] = [
  { nome: "Gabriel", idade: 24 },
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 17 },
  { nome: "Matheus", idade: 18 },
  { nome: "Jorge", idade: 5 }
]

function maioresIdade(lista: Pessoa[]): string[] {

  const MaioresDezoito = lista.filter(pessoa => pessoa.idade >= 18).map(pessoa => pessoa.nome);

  return MaioresDezoito;
}

// 7:

type Produto = {
  nome: string;
  preco: number;
};

const Produtos: Produto[] = [
  { nome: "Feijão", preco: 19.90 },
  { nome: "Macarrão", preco: 8.90 },
  { nome: "Coca Cola", preco: 17.99 },
  { nome: "Maminha", preco: 110.99 }
];

function maisCaro(carrinho: Produto[]): string | undefined {
  let produtoCaro: string = "";

  if (carrinho != undefined) {
    let maiorPreco: number = 0;
    carrinho.forEach(element => {
      if (element.preco > maiorPreco) {
        maiorPreco = element.preco;
        produtoCaro = element.nome;
      }
    });
    return produtoCaro;
  }
}

// 8:

function contadorPalavras(frase: string): Record<string, number> {

  const contagem: Record<string, number> = {};

  const separadas: string[] = frase.split(" ");

  separadas.forEach(element => {
    if (contagem[element]) {
      contagem[element] += 1;
    }
    else {
      contagem[element] = 1;
    }
  });
  return contagem;
}


// =-=-=-= Nivel 3  =-=-=-=

// 9:

function formatarID(valor: string | number): string {

  switch (typeof valor) {
    case "string":
      return valor.toUpperCase();

    case "number":
      let valorString: string = valor.toString();
      return valorString.padStart(5, "0");
  }
}

// 10:

type Status = "pendente" | "enviado" | "entregue" | "cancelado";

function checkStatus(status: Status): void {
  switch (status) {
    case "pendente":
      console.log("seu pedido está sendo preparado!");
      break;

    case "enviado":
      console.log("seu pedido foi enviado e está a caminho!");
      break;

    case "entregue":
      console.log("seu pedido já foi entregue!");
      break;

    case "cancelado":
      console.log("seu pedido foi cancelado!");
      break;
  }
}

// 11:

function emailCorreto(email: unknown): boolean {
  return typeof email === "string" && email.includes("@")
}


// =-=-=-=-=-=-=-=-=-=-=-=-= Exercicios do array.reduce =-=-=-=-=-=-=-=-=-=-=-=-=
