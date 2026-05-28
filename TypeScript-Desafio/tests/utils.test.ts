import { test } from "node:test";
import assert from "node:assert";
import { arredondar } from "../src/utils.js";

test("arredondar mantém número inteiro", () => {
    assert.strictEqual(arredondar(10), 10);
});

test("arredondar para baixo quando terceira casa é < 5", () => {
    assert.strictEqual(arredondar(1.234), 1.23);
});


