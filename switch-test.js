var teclado = require("prompt-sync")();
var nome = "";
var sobrenome = "";
function sair() {
    console.clear();
    console.log("Fim do programa....");
    process.exit(0);
}
function nomeCompleto(nome, sobrenome) {
    console.log("Nome completo \u00E9 ".concat(nome, " ").concat(sobrenome));
    console.log("Digite ENTER para continuar: ");
    teclado();
    menu();
}
function selecao(opcao) {
    nome = teclado("Digite o nome: ");
    sobrenome = teclado("Digite o sobrenome: ");
    switch (opcao) {
        case 0:
            sair();
            break;
        case 1:
            nomeCompleto(nome, sobrenome);
            break;
        default: break;
    }
}
function menu() {
    console.clear();
    console.log("-------Teste Fun\u00E7\u00E3o + Switch -------");
    console.log("---------Selecione a op\u00E7\u00E3o----------");
    console.log();
    console.log("Digite a op\u00E7\u00E3o desejada");
    console.log("0 - Sair");
    console.log("1 - Nome Completo");
    var opcao = parseInt(teclado("Digite a op\u00E7\u00E3o --> "));
    selecao(opcao);
}
menu();
