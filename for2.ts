const teclado = require (`prompt-sync`)();

let cont : number [] = new Array (9);
for (let x = 0; x <= 9; x++){
    cont [x]= parseInt(teclado(`Digite o número do índice ${x}: `));
}
console.log (`${cont}`);