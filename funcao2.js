function concatenar(palavra1, palavra2) {
    console.log("Concatenando ".concat(palavra1, " e ").concat(palavra2));
    console.log("Resultado ".concat(palavra1 + palavra2));
}
function calcularMedia(n1, n2) {
    var media = (n1 + n2) / 2;
    return media;
}
//use um laço de repetição e melhore o código abaixo e complete a tabuada
function tabUada(tabuada) {
    var cont = 0;
    while (cont < 11) {
        console.log("".concat(tabuada, " x ").concat(cont, " = ").concat(tabuada * cont));
        cont++;
    }
}
var teclado = require("prompt-sync")();
var palavra1 = teclado("Digite a palavra um a ser concatenada: ");
var palavra2 = teclado("Digite a palavra dois a ser concatenada: ");
concatenar(palavra1, palavra2);
var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
var n2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
var media = calcularMedia(n1, n2);
console.log("A m\u00E9dia de ".concat(n1, " e ").concat(n2, " = ").concat(media));
var tabuada = parseInt(teclado("Digite a tabuada desejada: "));
tabUada(tabuada);
