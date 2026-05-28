import type { Operation, Estado } from "./types.js"
import { arredondar } from "./utils.js";
import { LIMITE_ISENCAO } from "./constantes.js";

export const atualizarEstado = ( estado: Estado, operacao: Operation): Estado => {

    if (operacao.operation === "buy") {

        const novaQuantidade: number = estado.quantidadeAcoes + operacao.quantity;
        const investimentoTotal: number = (estado.mediaPonderada * estado.quantidadeAcoes) + (operacao.quantity * operacao["unit-cost"]);
        const novaMedia: number = arredondar(investimentoTotal / novaQuantidade);

        return {quantidadeAcoes: novaQuantidade, mediaPonderada: novaMedia, prejuizoAcumulado: estado.prejuizoAcumulado};
    }

    const novaQuantidade: number = estado.quantidadeAcoes - operacao.quantity;
    const valorTotal: number = operacao.quantity * operacao["unit-cost"];
    const lucro: number = (operacao["unit-cost"] - estado.mediaPonderada) * operacao.quantity;

    let novoPrejuizoAcumulado: number; 

    if (lucro < 0) {
        novoPrejuizoAcumulado = estado.prejuizoAcumulado + Math.abs(lucro);
    }
    else if (lucro > 0 && valorTotal > LIMITE_ISENCAO){
        novoPrejuizoAcumulado = Math.max(0, estado.prejuizoAcumulado - lucro);
    }
    else {
        novoPrejuizoAcumulado = estado.prejuizoAcumulado;
    }

    return {quantidadeAcoes: novaQuantidade, mediaPonderada: estado.mediaPonderada, prejuizoAcumulado: novoPrejuizoAcumulado};
}
