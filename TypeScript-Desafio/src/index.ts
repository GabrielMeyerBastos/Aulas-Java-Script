import readline from "node:readline";
import type { Operation } from "./types.js";

const r1 = readline.createInterface({
    input: process.stdin,
    terminal: false,
});

r1.on("line", (linha: string) => {
    if (linha.trim() === "") {
        return;
    }

    const operacoes: Operation[] = JSON.parse(linha);

    console.log(operacoes)
});

