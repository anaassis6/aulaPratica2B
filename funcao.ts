function saudacao (): void{
    console.log(`Olá Mundo!!`);
}

function soma (x1:number, x2:number):void{
    console.log (x1+x2);
}

function subtracao (x1: number, x2: number): number{
    return x1-x2
}

const teclado = require (`prompt-sync`)();

let n1: number = parseInt(teclado(`Digite o primeiro número: `));
let n2: number = parseInt(teclado(`Digite o segundo número: `));

saudacao(); //função sem paramêtro e sem retorno

soma(n1, n2); //função com paramêtro e sem retorno

let resultado: number = subtracao(n1, n2);

console.log(`O resultado de ${n1} - ${n2} = ${resultado}`);