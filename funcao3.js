/*Função com parâmetro e sem retorno
 function nomeDaFuncao(x: numer): void {...}
 */
function sobreMim(saudacao, idade, lazer, profissao) {
    console.log("".concat(saudacao, "!!!\n                Tenho ").concat(idade, ", gosto de ").concat(lazer, "\n                e tenho como profiss\u00E3o ").concat(profissao));
}
var saudacao = "Ol\u00E1 Mundo";
var idade = 112;
var lazer = "Assistir Roberto Carlos";
var profissao = "programador";
sobreMim(saudacao, idade, lazer, profissao);
/* Funcão sem parâmetro e sem retorno
 function nomeDaFuncao(): void{...}
 */
function oi() {
    console.log("Oi!!!!!!");
}
oi();
/*Função sem parâmetro e com retorno
function nomeDaFuncao() : number {...}
*/
function somaSemParametro() {
    var soma = 5 + 5;
    return soma;
}
var res = somaSemParametro();
console.log(res);
/*Função com parâmetro e com retorno
function nomeDaFuncao(x: number): number {...}
*/
function idadePessoa(anoNascimento) {
    var dataAtual = new Date();
    console.log(dataAtual);
    var anoAtual = dataAtual.getFullYear();
    var idade = anoAtual - anoNascimento;
    return idade;
}
var anoNascimento = 1984;
var idadeDois = idadePessoa(anoNascimento);
console.log("A idade da pessoa \u00E9 ".concat(idadeDois));
function incremento(x) {
    var y = x;
    y++;
    return y;
}
var x = 0;
while (x < 5) {
    console.log(x);
    x = incremento(x);
}
