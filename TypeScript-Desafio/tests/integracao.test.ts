import { test } from "node:test";
import assert from "node:assert";
import { processarOperacoes } from "../src/processador.js";
import type { Operation } from "../src/types.js";


test("Case #1", () => {
    const operacoes:  Operation[] = [
        {  operation: "buy", "unit-cost": 10, quantity: 100},
        {  operation: "sell", "unit-cost": 15, quantity: 50},
        {  operation: "sell", "unit-cost": 15, quantity: 50},
    ];

    const resultado = processarOperacoes(operacoes);

    assert.deepStrictEqual(resultado, [0, 0, 0]);
});

test("Case #2", () => {
    const operacoes:  Operation[] = [
        {  operation:"buy", "unit-cost":10.00, quantity: 10000},
        {  operation:"sell", "unit-cost":20.00, quantity: 5000},
        {  operation:"sell", "unit-cost":5.00, quantity: 5000},
    ];

    const resultado = processarOperacoes(operacoes);

    assert.deepStrictEqual(resultado, [0, 10000, 0]);
});

test("Case #3", () => {
    const operacoes:  Operation[] = [
        { operation:"buy", "unit-cost":10.00,  quantity: 10000},
        { operation:"sell", "unit-cost":5.00,  quantity: 5000},
        { operation:"sell", "unit-cost":20.00,  quantity: 3000},
    ];

    const resultado = processarOperacoes(operacoes);

    assert.deepStrictEqual(resultado, [0, 0, 1000]);
});

test("Case #4", () => {
    const operacoes:  Operation[] = [
        { operation:"buy", "unit-cost":10.00,  quantity: 10000},
        { operation:"buy", "unit-cost":25.00,  quantity: 5000},
        { operation:"sell", "unit-cost":15.00,  quantity: 10000},
    ];

    const resultado = processarOperacoes(operacoes);

    assert.deepStrictEqual(resultado, [0, 0, 0]);
});

test("Case #5", () => {
    const operacoes:  Operation[] = [
        { operation:"buy", "unit-cost":10.00,  quantity: 10000},
        { operation:"buy", "unit-cost":25.00,  quantity: 5000},
        { operation:"sell", "unit-cost":15.00,  quantity: 10000},
        { operation:"sell", "unit-cost":25.00,  quantity: 5000},
    ];

    const resultado = processarOperacoes(operacoes);

    assert.deepStrictEqual(resultado, [0, 0, 0, 10000]);
});

test("Case #6", () => {
    const operacoes:  Operation[] = [
        { operation:"buy", "unit-cost":10.00,  quantity: 10000},
        { operation:"sell", "unit-cost":2.00,  quantity: 5000},
        { operation:"sell", "unit-cost":20.00,  quantity: 2000},
        { operation:"sell", "unit-cost":20.00,  quantity: 2000},
        { operation:"sell", "unit-cost":25.00,  quantity: 1000},
    ];

    const resultado = processarOperacoes(operacoes);

    assert.deepStrictEqual(resultado, [0, 0, 0, 0, 3000]);
});

test("Case #7", () => {
    const operacoes:  Operation[] = [
        { operation:"buy", "unit-cost":10.00,  quantity: 10000},
        { operation:"sell", "unit-cost":2.00,  quantity: 5000},
        { operation:"sell", "unit-cost":20.00,  quantity: 2000},
        { operation:"sell", "unit-cost":20.00,  quantity: 2000},
        { operation:"sell", "unit-cost":25.00,  quantity: 1000},
        { operation:"buy", "unit-cost":20.00,  quantity: 10000},
        { operation:"sell", "unit-cost":15.00,  quantity: 5000},
        { operation:"sell", "unit-cost":30.00,  quantity: 4350},
        { operation:"sell", "unit-cost":30.00,  quantity: 650},
    ];

    const resultado = processarOperacoes(operacoes);

    assert.deepStrictEqual(resultado, [0, 0, 0, 0, 3000, 0 ,0, 3700, 0]);
});

test("Case #8", () => {
    const operacoes:  Operation[] = [
        { operation:"buy", "unit-cost":10.00,  quantity: 10000},
        { operation:"sell", "unit-cost":50.00,  quantity: 10000},
        { operation:"buy", "unit-cost":20.00,  quantity: 10000},
        { operation:"sell", "unit-cost":50.00,  quantity: 10000},
    ];

    const resultado = processarOperacoes(operacoes);

    assert.deepStrictEqual(resultado, [0, 80000, 0, 60000]);
});

test("Case #9", () => {
    const operacoes:  Operation[] = [
        { operation: "buy", "unit-cost": 5000.00,  quantity: 10}, 
        { operation: "sell", "unit-cost": 4000.00,  quantity: 5},
        { operation: "buy", "unit-cost": 15000.00,  quantity: 5},
        { operation: "buy", "unit-cost": 4000.00,  quantity: 2},
        { operation: "buy", "unit-cost": 23000.00,  quantity: 2},
        { operation: "sell", "unit-cost": 20000.00,  quantity: 1},
        { operation: "sell", "unit-cost": 12000.00,  quantity: 10},
        { operation: "sell", "unit-cost": 15000.00,  quantity: 3},
    ];

    const resultado = processarOperacoes(operacoes);

    assert.deepStrictEqual(resultado, [0, 0, 0, 0, 0, 0, 1000, 2400]);
});