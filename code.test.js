const fs = require("fs");
const assert = require("assert");
eval(fs.readFileSync("code.js") + "");

assert.strictEqual(countMatches([1, 2, 2, 2, 1, 2]), 4);
