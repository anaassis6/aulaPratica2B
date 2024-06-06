function saudacaoBomDia (nome: string): void{
    console.log(`Bom Dia ${nome}!!`);
}

function saudacaoBoaTarde (nome: string): void{
    console.log(`Boa Tarde ${nome}!!`);
}

function saudacaoBoaNoite (nome: string): void{
     console.log(`Boa Noite ${nome}!!`);
}

const teclado = require (`prompt-sync`)();
let nome: string = teclado (`Digite seu nome aqui: `);

console.log(`${nome}, qual período é agora?`);
console.log(`Digite: `);
console.log(`bd - Matutino`);
console.log(`bt - Vespertino`);
console.log(`bn - Noturno`);

let opcao: string = teclado (`--> `);

switch (opcao){
    case `bd`: saudacaoBomDia(nome); break;
    case `bt`: saudacaoBoaTarde(nome); break;
    case `bn`: saudacaoBoaNoite(nome); break;
    default: 
    break;
}
