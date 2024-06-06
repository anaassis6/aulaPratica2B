// Array tipo number índice 0   1   2   3
var meuArray = [12, 24, 20, 16];
// Array tipo string índice            0               1              2
var meuArrayDois = ["Segunda-feira", "Ter\u00E7a-feira", "Quarta-feira"];
// Utilizado para criar um Array com dimensão definida/determinada
var meuArrayTres = new Array(3); //0-2
console.clear();
var teclado = require("prompt-sync")();
var cont = 0;
var total = 0;
do {
    meuArrayTres[cont] = parseInt(teclado("Digite o n\u00FAmero do \u00EDndice ".concat(cont, ": ")));
    cont++;
} while (cont < 3);
cont = 0;
do {
    total += meuArrayTres[cont];
    cont++;
} while (cont <= 2);
console.log(total);
