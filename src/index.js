const { greet } = require("./lib/greet");

const name = process.argv[2];

console.log("=== Git Training CLI ===");
console.log(greet(name));
console.log("Dica: edite src/lib/greet.js para mudar a mensagem.");
