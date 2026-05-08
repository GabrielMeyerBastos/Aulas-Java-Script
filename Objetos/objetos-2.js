/*const aluno = {
  nome: "Gabriel",
  idade: 23,
  cargo: "Backend",
  saudacao: function () {
    console.log(`Gabriel Trabalha como Backend e possui 23 anos`)
  }
}
// chama a função presente dentro do objeto
aluno.saudacao();


//criar objetos como funções e chamar elas
const calculos = {
  soma: function (num1, num2) {
    return num1 + num2
  },
  multi: function (num1, num2) {
    return num1 * num2
  },
}

const resultadosoma = calculos.soma(30, 20);
console.log(resultadosoma);

const resultadomulti = calculos.multi(30, 20);
console.log(resultadomulti);
*/

////////////////////////////////////////////////////////////////////////////////////////

const calculos = {
  num1: 20,
  num2: 30,
  soma: function () {
    return this.num1 + this.num2
  },
  multi: function () {
    return this.num1 * this.num2
  },
}

const resultado = calculos.soma();
console.log(resultado);

const resultado1 = calculos.multi();
console.log(resultado1);
