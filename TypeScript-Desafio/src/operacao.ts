import type { Operation } from "./types.js";

const calcularImposto = (transacao: Operation): number => { 
    if (transacao.operation === "buy") {
        return 0;
    }

    const valorTotal: number = transacao.quantity * transacao["unit-cost"];

    if ( valorTotal <= 20000){
        return 0;
    }

    return 0;
}


const resultado: number = calcularImposto({"operation": "sell", "unit-cost": 50.00, "quantity": 1000});
console.log(resultado)











    



