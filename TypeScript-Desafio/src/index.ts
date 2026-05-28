import readline from "node:readline";
import type { Operation, TaxResult } from "./types.js";
import { processarOperacoes } from "./processador.js";


const r1 = readline.createInterface({
    input: process.stdin,
    terminal: false,
});

r1.on("line", (linha: string) => {
    if (linha.trim() === "") {
        return;
    }

    const operacoes: Operation[] = JSON.parse(linha);

    const impostos = processarOperacoes(operacoes);

    const resultado = impostos.map((imposto): TaxResult => ({tax: imposto}));
    console.log(JSON.stringify(resultado));
});

