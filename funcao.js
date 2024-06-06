function saudacao() {
    console.log("Ol\u00E1 Mundo!!");
}
function soma(n1, n2) {
    console.log(n1 + n2);
}
function subtracao(n1, n2) {
    return n1 - n2;
}
var teclado = require("prompt-sync")();
var numeroUm = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
var numeroDois = parseInt(teclado("Digite o segundo n\u00FAmero: "));
saudacao(); //função sem paramêtro e sem retorno
soma(numeroUm, numeroDois); //função com paramêtro e sem retorno
var resultado = subtracao(numeroUm, numeroDois);
console.log("O resultado de ".concat(numeroUm, " - ").concat(numeroDois, " = ").concat(resultado));
