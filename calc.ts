let inOut: number = 0;

do{
    const teclado = require(`prompt-sync`)();

    console.log(`Qual operação deseja?`);
    console.log(`+ --> Adição`);
    console.log(`- --> Subtração`);
    console.log(`* --> Multiplicação`);
    console.log(`/ --> Divisão`);
    console.log(`0 --> Sair`);

    let opcao : string = teclado (`Digite a opção desejada: `);


    let n1: number = 0;
    let n2: number = 0;
    let resultado: number = 0

    if(opcao == `+`){
        n1= parseInt(teclado(`Digite o 1º número: `));
        n2= parseInt(teclado(`Digite o 2º número: `));
        resultado = n1+n2;
        console.log(`O valor da soma de ${n1} com ${n2} `);
        console.log(`é ${resultado}`);
    }
    else if(opcao == `-`){
        n1= parseInt(teclado(`Digite o 1º número: `));
        n2= parseInt(teclado(`Digite o 2º número: `));
        resultado = n1-n2;
        console.log(`O valor da subtração de ${n1} com ${n2} `);
        console.log(`é ${resultado}`);
    }
    else if(opcao == `*`){
        n1= parseInt(teclado(`Digite o 1º número: `));
        n2= parseInt(teclado(`Digite o 2º número: `));
        resultado = n1*n2;
        console.log(`O valor da multiplicação de ${n1} com ${n2} `);
        console.log(`é ${resultado}`);
    }
    else if(opcao == `/`){
        n1= parseInt(teclado(`Digite o 1º número: `));
        n2= parseInt(teclado(`Digite o 2º número: `));
        resultado = n1/n2;
        console.log(`O valor da divisão de ${n1} com ${n2} `);
        console.log(`é ${resultado}`);
    }
    else{
        console.log(`Algo deu errado!!`)
    }

    console.log(``);
    console.log(`Para continuar digite...`);
    console.log(`0 - para Sair `);
    console.log(`1 - para continuar`);
    inOut= parseInt(teclado(`Digite a opcão: `));

}while (inOut != 0);

console.log(`Fim do programa!!`);