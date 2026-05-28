# Ganho de Capital

Um programa que calcula o imposto a ser pago sobre lucros ou prejuízos de operações no mercado financeiro de ações.

## Pré-requisitos

É necessário ter o `Node.js` instalado, tendo pelo menos a versão 20+.

## Instalação

Com o terminal aberto na pasta do projeto, use o comando `npm install` para instalar as dependências do projeto. 

## Como executar

Insira as operações que deseja processar no arquivo `input.txt` e execute `npm run dev`.

Caso deseje usar outro arquivo como entrada, adicione-o na raiz do projeto e use `npx tsx src/index.ts < arquivo.txt`.

Em ambos os casos, as operações devem estar no formato JSON. Cada linha do arquivo representa uma simulação independente, e todo o JSON daquela simulação deve estar contido em uma única linha.

Para cada linha de entrada, o programa retorna no terminal uma lista JSON com o imposto de cada operação.

## Como rodar os testes

Para rodar os testes, com o mesmo terminal, use o comando `npm test` para executar todos os testes unitários e de integração. Os resultados (`sucessos` e `falhas`) serão exibidos no terminal.

## Decisões técnicas e arquiteturais

A solução está dividida em arquivos pequenos, cada um responsável por uma parte do problema:

- **`types.ts`**: arquivo de criação das interfaces usadas na lógica de entrada e saída de dados. 

- **`imposto.ts`**: script onde a função de cálculo do imposto é criada, a função usa o estado das transações passadas e os dados da operação atual como parâmetros na fórmula de cálculo de imposto em operações de compra e venda de ações. 

- **`estado.ts`**: script onde reside a função que atualiza o estado após cada operação executada, recebendo o estado anterior e a operação atual para realizar o cálculo da quantidade total de ações, investimento total, média ponderada e armazenamento do prejuízo acumulado. 

- **`processador.ts`**: script onde as funções de cálculo de imposto e atualização do estado são efetuadas para cada estrutura de operações executada, retornando uma lista com o imposto correspondente a cada operação processada. 

- **`index.ts`**: arquivo responsável pela leitura da entrada padrão (`stdin`), separando cada linha de operações e executando-as em ordem usando a função `processarOperacoes` presente no arquivo `processador.ts`, onde cada linha processada gera, no terminal, uma lista JSON com o imposto correspondente a cada operação. 

- **`utils.ts`**: arquivo de criação da função `arredondar` usada para formatar os números usados no programa para apenas dois dígitos após a vírgula. 

- **`constantes.ts`**: declaração das duas constantes usadas no projeto:
        - `LIMITE_ISENCAO` = o valor de R$20.000 abaixo do qual a venda é isenta.
        - `ALIQUOTA_IMPOSTO` = a taxa de 20% aplicada sobre o lucro.

## Bibliotecas utilizadas

O projeto prioriza simplicidade e o uso do ecossistema nativo do Node.js. Por isso, foram utilizadas apenas três dependências de desenvolvimento, e nenhuma biblioteca em tempo de execução:

- **`typescript`**: adiciona tipagem estática ao projeto. Os tipos `Operation` e `Estado` definidos em `types.ts` ajudam a prevenir erros durante o desenvolvimento e tornam o código mais legível.
- **`tsx`**: permite executar arquivos `.ts` diretamente, sem etapa de compilação prévia. Simplifica o fluxo de desenvolvimento e a execução dos testes.
- **`@types/node`**: fornece as definições de tipo das APIs nativas do Node utilizadas no projeto, como `readline`, `process.stdin`, `node:test` e `node:assert`.

Optou-se por não utilizar bibliotecas externas para parse de JSON, framework de testes ou qualquer outra funcionalidade. O parse é feito com `JSON.parse` nativo e os testes utilizam o `node:test`, test runner embutido no Node.js a partir da versão 20.

## Notas adicionais

- A lógica de processamento (`processarOperacoes`) foi isolada da camada de entrada e saída (`index.ts`), o que permite testá-la de ponta a ponta sem precisar simular `stdin` e `stdout`.
- Todos os 9 casos de exemplo do enunciado estão cobertos por testes de integração no arquivo `tests/integracao.test.ts`.
- O estado da aplicação é tratado de forma imutável: a função `atualizarEstado` retorna sempre um novo objeto em vez de modificar o estado existente.
- As constantes `LIMITE_ISENCAO` e `ALIQUOTA_IMPOSTO` foram extraídas para o arquivo `constantes.ts`, evitando "magic numbers" no código e facilitando alterações futuras nas regras.