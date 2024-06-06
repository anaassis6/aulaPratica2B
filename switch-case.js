function saudacaoBomDia(nome) {
    console.log("Bom Dia ".concat(nome, "!!"));
}
function saudacaoBoaTarde(nome) {
    console.log("Boa Tarde ".concat(nome, "!!"));
}
function saudacaoBoaNoite(nome) {
    console.log("Boa Noite ".concat(nome, "!!"));
}
var teclado = require("prompt-sync")();
var nome = teclado("Digite seu nome aqui: ");
console.log("".concat(nome, ", qual per\u00EDodo \u00E9 agora?"));
console.log("Digite: ");
console.log("bd - Matutino");
console.log("bt - Vespertino");
console.log("bn - Noturno");
var opcao = teclado("--> ");
switch (opcao) {
    case "bd":
        saudacaoBomDia(nome);
        break;
    case "bt":
        saudacaoBoaTarde(nome);
        break;
    case "bn":
        saudacaoBoaNoite(nome);
        break;
    default:
        break;
}
