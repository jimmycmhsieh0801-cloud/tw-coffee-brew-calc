const assert = require("assert");
const { calcCoffee } = require("./app.js");
const r = calcCoffee(15, 15, 1);
assert.strictEqual(r.totalWater, 225);
assert.strictEqual(r.bloomWater, 30);
console.log("COFFEE_BREW_TESTS_PASSED");