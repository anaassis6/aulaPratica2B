var teclado = require("prompt-sync")();
var cont = new Array(9);
for (var x = 0; x <= 9; x++) {
    cont[x] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(x, ": ")));
}
console.log("".concat(cont));
