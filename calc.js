var inOut = 0;
do {
    var teclado = require("prompt-sync")();
    console.log("Qual opera\u00E7\u00E3o deseja?");
    console.log("+ --> Adi\u00E7\u00E3o");
    console.log("- --> Subtra\u00E7\u00E3o");
    console.log("* --> Multiplica\u00E7\u00E3o");
    console.log("/ --> Divis\u00E3o");
    console.log("0 --> Sair");
    var opcao = teclado("Digite a op\u00E7\u00E3o desejada: ");
    var n1 = 0;
    var n2 = 0;
    var resultado = 0;
    if (opcao == "+") {
        n1 = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        n2 = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        resultado = n1 + n2;
        console.log("O valor da soma de ".concat(n1, " com ").concat(n2, " "));
        console.log("\u00E9 ".concat(resultado));
    }
    else if (opcao == "-") {
        n1 = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        n2 = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        resultado = n1 - n2;
        console.log("O valor da subtra\u00E7\u00E3o de ".concat(n1, " com ").concat(n2, " "));
        console.log("\u00E9 ".concat(resultado));
    }
    else if (opcao == "*") {
        n1 = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        n2 = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        resultado = n1 * n2;
        console.log("O valor da multiplica\u00E7\u00E3o de ".concat(n1, " com ").concat(n2, " "));
        console.log("\u00E9 ".concat(resultado));
    }
    else if (opcao == "/") {
        n1 = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        n2 = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        resultado = n1 / n2;
        console.log("O valor da divis\u00E3o de ".concat(n1, " com ").concat(n2, " "));
        console.log("\u00E9 ".concat(resultado));
    }
    else {
        console.log("Algo deu errado!!");
    }
    console.log("Para continuar digite...");
    console.log("0 - para Sair ");
    console.log("1 - para continuar");
    inOut = parseInt(teclado("Digite a opc\u00E3o: "));
} while (inOut != 0);
console.log("Fim do programa!!");
