import { test } from "node:test";
import assert from "node:assert/strict";
import type { Operation } from "../src/types.js";
import { verificadorInput } from "../src/verificador-entrada.js";

test("verifica se a operação executada está no formato correto:", () => {

    const entrada: Operation[] = [{ operation: "buy", "unit-cost": 10, quantity: 100 }];

    const resultado: boolean = verificadorInput(entrada);

    assert.strictEqual(resultado, true);
});


