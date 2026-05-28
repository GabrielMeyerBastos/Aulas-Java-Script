import { test } from "node:test";
import assert from "node:assert";
import { calcularImposto } from "../src/imposto.js";
import type { Estado, Operation } from "../src/types.js";

// CENÁRIO 1
test("compra sempre retorna 0", () => {
    const estado: Estado = {
        quantidadeAcoes: 100,
        mediaPonderada: 10,
        prejuizoAcumulado: 0
    };
    const operacao: Operation = {
        operation: "buy",
        "unit-cost": 50,
        quantity: 1000
    };

    assert.strictEqual(calcularImposto(estado, operacao), 0);
});

// CENÁRIO 2
test("venda isenta com lucro retorna 0", () => {
    const estado : Estado = {
        quantidadeAcoes: 100,
        mediaPonderada: 10,
        prejuizoAcumulado: 0
    };
    const operacao: Operation = {
        operation: "sell",
        "unit-cost": 15,
        quantity: 50
    };

    assert.strictEqual(calcularImposto(estado, operacao), 0);
});

// CENÁRIO 3
test("venda com prejuízo retorna 0", () => {
    const estado : Estado = {
        quantidadeAcoes: 10000,
        mediaPonderada: 20,
        prejuizoAcumulado: 0
    };
    const operacao: Operation = {
        operation: "sell",
        "unit-cost": 10,
        quantity: 5000
    };    

    assert.strictEqual(calcularImposto(estado, operacao), 0);
});

// CENÁRIO 4
test("venda lucrativa sem banco de prejuízo", () => {
    const estado : Estado = {
        quantidadeAcoes: 10000,
        mediaPonderada: 10,
        prejuizoAcumulado: 0
    };
    const operacao: Operation = {
        operation: "sell",
        "unit-cost": 20,
        quantity: 5000
    }; 
    
    assert.strictEqual(calcularImposto(estado, operacao), 10000);
});

// CENÁRIO 5
test("venda lucrativa com banco abatendo parcialmente", () => {
    const estado : Estado = {
        quantidadeAcoes: 10000,
        mediaPonderada: 10,
        prejuizoAcumulado: 25000
    };
    const operacao: Operation = {
        operation: "sell",
        "unit-cost": 20,
        quantity: 3000
    }; 

    assert.strictEqual(calcularImposto(estado, operacao), 1000);        
});

// CENÁRIO 6
test("venda lucrativa com banco engolindo tudo", () => {
    const estado : Estado = {
        quantidadeAcoes: 10000,
        mediaPonderada: 10,
        prejuizoAcumulado: 100000
    };
    const operacao: Operation = {
        operation: "sell",
        "unit-cost": 20,
        quantity: 5000
    }; 

    assert.strictEqual(calcularImposto(estado, operacao), 0);        
});