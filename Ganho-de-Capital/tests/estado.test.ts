import { test } from "node:test";
import assert from "node:assert";
import { atualizarEstado } from "../src/estado.js";
import type { Estado, Operation } from "../src/types.js";


// CENÁRIO 1
test("primeira compra define a média ponderada.", () => {
    const estado: Estado = { quantidadeAcoes: 0, mediaPonderada: 0, prejuizoAcumulado: 0};
    const operacao: Operation = { operation: "buy", "unit-cost": 10, quantity: 100};

    const resultado = atualizarEstado(estado, operacao);

    assert.deepStrictEqual(resultado, {
        quantidadeAcoes: 100,
        mediaPonderada: 10,
        prejuizoAcumulado: 0
    });
});

// CENÁRIO 2
test("segunda compra recalcula a média ponderada.", () => {
    const estado: Estado = { quantidadeAcoes: 100, mediaPonderada: 10, prejuizoAcumulado: 0};
    const operacao: Operation = { operation: "buy", "unit-cost": 20, quantity: 100};

    const resultado = atualizarEstado(estado, operacao);

    assert.deepStrictEqual(resultado, {
        quantidadeAcoes: 200,
        mediaPonderada: 15,
        prejuizoAcumulado: 0
    });
});

// CENÁRIO 3
test("venda diminui quantidade mas nao muda a média.", () => {
    const estado: Estado = { quantidadeAcoes: 200, mediaPonderada: 15, prejuizoAcumulado: 0};
    const operacao: Operation = { operation: "sell", "unit-cost": 30, quantity: 50};

    const resultado = atualizarEstado(estado, operacao);

    assert.deepStrictEqual(resultado, {
        quantidadeAcoes: 150,
        mediaPonderada: 15,
        prejuizoAcumulado: 0
    });
});

// CENÁRIO 4
test("venda com prejuízo acumula no banco.", () => {
    const estado: Estado = { quantidadeAcoes: 10000, mediaPonderada: 10, prejuizoAcumulado: 0};
    const operacao: Operation = { operation: "sell", "unit-cost": 5, quantity: 5000};

    const resultado = atualizarEstado(estado, operacao);

    assert.deepStrictEqual(resultado, {
        quantidadeAcoes: 5000,
        mediaPonderada: 10,
        prejuizoAcumulado: 25000
    });
});

// CENÁRIO 5
test("venda com prejuízo mesmo sendo isenta acumula no banco.", () => {
    const estado: Estado = { quantidadeAcoes: 10000, mediaPonderada: 10, prejuizoAcumulado: 0};
    const operacao: Operation = { operation: "sell", "unit-cost": 2, quantity: 5000};

    const resultado = atualizarEstado(estado, operacao);

    assert.deepStrictEqual(resultado, {
        quantidadeAcoes: 5000,
        mediaPonderada: 10,
        prejuizoAcumulado: 40000
    });
});

// CENÁRIO 6
test("venda lucrativa não-isenta abate o banco.", () => {
    const estado: Estado = { quantidadeAcoes: 5000, mediaPonderada: 10, prejuizoAcumulado: 25000};
    const operacao: Operation = { operation: "sell", "unit-cost": 20, quantity: 3000};

    const resultado = atualizarEstado(estado, operacao);

    assert.deepStrictEqual(resultado, {
        quantidadeAcoes: 2000,
        mediaPonderada: 10,
        prejuizoAcumulado: 0
    });
});