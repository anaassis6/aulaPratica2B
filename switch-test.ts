const teclado = require (`prompt-sync`)();
let nome: string = ``;
let sobrenome: string = ``;

function sair (): void{
    console.clear();
    console.log(`Fim do programa....`);
    process.exit(0);
}

function nomeCompleto (nome:string, sobrenome: string):void {
    console.log(`Nome completo é ${nome} ${sobrenome}`);
    console.log(`Digite ENTER para continuar: `);
    teclado();
    menu();
}

function selecao(opcao: number): void{
    nome = teclado (`Digite o nome: `);
    sobrenome = teclado (`Digite o sobrenome: `);

    switch (opcao){
        case 0 : sair(); break;
        case 1: nomeCompleto(nome, sobrenome); break;
        default: break;
    }
}

function menu(): void{
    console.clear();
    console.log(`-------Teste Função + Switch -------`);
    console.log(`---------Selecione a opção----------`);
    console.log();
    console.log(`Digite a opção desejada`);
    console.log(`0 - Sair`);
    console.log(`1 - Nome Completo`);
    let opcao: number = parseInt(teclado(`Digite a opção --> `));
    selecao(opcao);
}

menu();