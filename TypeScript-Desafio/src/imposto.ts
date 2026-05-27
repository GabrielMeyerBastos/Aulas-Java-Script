import type { Operation, Estado } from "./types.js";

export const calcularImposto = (estado: Estado, operacao: Operation): number => { 
    if (operacao.operation === "buy") {
        return 0;
    } 

    const valorTotal: number = operacao.quantity * operacao["unit-cost"];

    if ( valorTotal <= 20000){
        return 0;
    }

    const lucro: number = (operacao["unit-cost"] - estado.mediaPonderada) * operacao.quantity

    if (lucro <= 0) {
        return 0;
    }

    const lucroAposAbater: number = Math.max(0, lucro - estado.prejuizoAcumulado);


    return lucroAposAbater * 0.2;

}
