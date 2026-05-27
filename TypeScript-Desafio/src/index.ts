import readline from "node:readline";
import type { Operation, Estado } from "./types.js";
import { calcularImposto } from "./imposto.js";
import { atualizarEstado } from "./estado.js";



const r1 = readline.createInterface({
    input: process.stdin,
    terminal: false,
});

r1.on("line", (linha: string) => {
    if (linha.trim() === "") {
        return;
    }

    const operacoes: Operation[] = JSON.parse(linha);

    let estado: Estado = {quantidadeAcoes: 0, mediaPonderada: 0, prejuizoAcumulado: 0};

    let impostos: number[] = [];

    for (const operacao of operacoes) {
        
        const imposto = calcularImposto(estado, operacao);
        impostos.push(imposto);
        estado = atualizarEstado(estado, operacao);
        
    }
    const resultado = impostos.map((imposto) => ({tax: imposto}));
    console.log(JSON.stringify(resultado));
});

