import type { Operation, Estado } from "./types.js";
import { calcularImposto } from "./imposto.js";
import { atualizarEstado } from "./estado.js";

export const processarOperacoes = (operacoes: Operation[]): number[] => {

    let estado: Estado = {quantidadeAcoes: 0, mediaPonderada: 0, prejuizoAcumulado: 0};

    const impostos: number[] = [];

    for (const operacao of operacoes) {
        
        const imposto = calcularImposto(estado, operacao);
        impostos.push(imposto);
        estado = atualizarEstado(estado, operacao);
        
    }
    return impostos;
}