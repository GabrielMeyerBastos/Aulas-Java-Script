import type { Operation, Estado } from "./types.js"

const atualizarEstado = ( estado: Estado, operacao: Operation): Estado => {

    if (operacao.operation === "buy") {

        const novaQuantidade: number = estado.quantidadeAcoes + operacao.quantity;

        const investimentoTotal: number = (estado.mediaPonderada * estado.quantidadeAcoes) + (operacao.quantity * operacao["unit-cost"]);

        const novaMedia: number = investimentoTotal / novaQuantidade;

        return {quantidadeAcoes: novaQuantidade, mediaPonderada: novaMedia};
    }

    else {
        const novaQuantidade: number = estado.quantidadeAcoes - operacao.quantity;
        return {quantidadeAcoes: novaQuantidade, mediaPonderada: estado.mediaPonderada};
    }
}
