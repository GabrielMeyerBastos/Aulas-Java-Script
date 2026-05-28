import type { Operation, Estado } from "./types.js";
import { arredondar } from "./utils.js";
import { LIMITE_ISENCAO, ALIQUOTA_IMPOSTO } from "./constantes.js";


export const calcularImposto = (estado: Estado, operacao: Operation): number => { 
    if (operacao.operation === "buy") {
        return 0;
    } 

    const valorTotal: number = operacao.quantity * operacao["unit-cost"];

    if ( valorTotal <= LIMITE_ISENCAO){
        return 0;
    }

    const lucro: number = (operacao["unit-cost"] - estado.mediaPonderada) * operacao.quantity;

    if (lucro <= 0) {
        return 0;
    }

    const lucroAposAbater: number = Math.max(0, lucro - estado.prejuizoAcumulado);


    return arredondar(lucroAposAbater * ALIQUOTA_IMPOSTO);

}
