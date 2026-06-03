import type { Operation } from "./types.js";


const verificaChavesValidas = (operacao: Operation): boolean => {

    const tamanhoCorreto: number = 3;
    const tamanho: number = Object.keys(operacao).length;
    const chavesInput: string[] = Object.keys(operacao);

    if (tamanho !== tamanhoCorreto) {
        return false;
    }
    if (!chavesInput.includes('operation')) {
        return false;
    }
    if (!chavesInput.includes('unit-cost')) {
        return false;
    }
    if (!chavesInput.includes('quantity')) {
        return false;
    }
    return true;
}

export const verificadorInput = (operacoes: Operation[]): boolean => {

    for (const op of operacoes) {

        if (!verificaChavesValidas(op)) {
            return false;
        }
        if (op.operation !== "buy" && op.operation !== "sell") {
            return false;
        }
        if (typeof op["unit-cost"] !== "number") {
            return false;
        }
        if (typeof op.quantity !== "number") {
            return false;
        }
    }
    return true;
}
