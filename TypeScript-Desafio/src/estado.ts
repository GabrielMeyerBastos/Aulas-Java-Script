import type { Operation, Estado } from "./types.js"

export const atualizarEstado = ( estado: Estado, operacao: Operation): Estado => {

    if (operacao.operation === "buy") {

        const novaQuantidade: number = estado.quantidadeAcoes + operacao.quantity;
        const investimentoTotal: number = (estado.mediaPonderada * estado.quantidadeAcoes) + (operacao.quantity * operacao["unit-cost"]);
        const novaMedia: number = investimentoTotal / novaQuantidade;

        return {quantidadeAcoes: novaQuantidade, mediaPonderada: novaMedia, prejuizoAcumulado: estado.prejuizoAcumulado};
    }

    const novaQuantidade: number = estado.quantidadeAcoes - operacao.quantity;
    const valorTotal: number = operacao.quantity * operacao["unit-cost"];
    const lucro: number = (operacao["unit-cost"] - estado.mediaPonderada) * operacao.quantity

    let novoPrejuizoAcumulado: number; 

    if (lucro < 0) {
        novoPrejuizoAcumulado = estado.prejuizoAcumulado + Math.abs(lucro);
    }
    else if (lucro > 0 && valorTotal > 20000){
        novoPrejuizoAcumulado = Math.max(0, estado.prejuizoAcumulado - lucro);
    }
    else {
        novoPrejuizoAcumulado = estado.prejuizoAcumulado;
    }

    return {quantidadeAcoes: novaQuantidade, mediaPonderada: estado.mediaPonderada, prejuizoAcumulado: novoPrejuizoAcumulado};
}
