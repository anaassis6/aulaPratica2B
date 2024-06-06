/*Função com parâmetro e sem retorno
 function nomeDaFuncao(x: numer): void {...}
 */
function sobreMim (saudacao:string, idade:number, 
                  lazer:string, profissao:string):void{
    console.log(`${saudacao}!!!
                Tenho ${idade}, gosto de ${lazer}
                e tenho como profissão ${profissao}`);
                }
let saudacao: string = `Olá Mundo`;
let idade: number = 112;
let lazer: string = `Assistir Roberto Carlos`;
let profissao: string = `programador`;
sobreMim(saudacao, idade, lazer, profissao);

/* Funcão sem parâmetro e sem retorno 
 function nomeDaFuncao(): void{...}
 */
function oi (): void{
    console.log(`Oi!!!!!!`);
    }
    oi();              
            
/*Função sem parâmetro e com retorno
function nomeDaFuncao() : number {...}
*/
function somaSemParametro (): number{
    let soma: number = 5 + 5;
    return soma;
}
let res: number = somaSemParametro();
console.log(res);

/*Função com parâmetro e com retorno
function nomeDaFuncao(x: number): number {...}   
*/
function idadePessoa (anoNascimento: number): number{
    const dataAtual = new Date();
    console.log(dataAtual);
    const anoAtual = dataAtual.getFullYear();
    let idade: number = anoAtual - anoNascimento;
    return idade;
}

let anoNascimento: number = 1984;

let idadeDois: number = idadePessoa(anoNascimento);
console.log(`A idade da pessoa é ${idadeDois}`);




function incremento (x:number):number{
    let y: number = x;
    y++
    return y
}

let x: number=0;

while (x < 5){
    console.log(x);
    x = incremento(x);
}