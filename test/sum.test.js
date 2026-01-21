const test = require("node:test");
const assert = require("node:assert");
const { sum } = require("../src/lib/sum");

test("sum adds two numbers", () => {
  assert.strictEqual(sum(4, 3), 7);
});
