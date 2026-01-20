const { greet } = require("./lib/greet");
const { sum } = require("./lib/sum");


const name = process.argv[2];

console.log("=== Git Training CLI ===");
console.log(greet(name));
console.log("Dica: edite src/lib/greet.js para mudar a mensagem.");
console.log("Sum result:", sum(2, 3));
