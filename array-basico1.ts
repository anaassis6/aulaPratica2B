// Array tipo number índice 0   1   2   3
let meuArray : number [] = [12, 24, 20, 16];

// Array tipo string índice            0               1              2
let meuArrayDois : string [] = [`Segunda-feira`, `Terça-feira`, `Quarta-feira`];

// Utilizado para criar um Array com dimensão definida/determinada
let meuArrayTres : number [] = new Array (3); //0-2

console.clear();
const teclado = require (`prompt-sync`)();
let cont: number = 0;
let total: number = 0;

do{
    meuArrayTres[cont] = parseInt(teclado(`Digite o número do índice ${cont}: `));
    cont ++;
} while(cont < 3);

cont= 0;

do{
    total += meuArrayTres[cont];
    cont ++
}while(cont <= 2);

console.log(total);