//fora do html, apenas exemplos da aula

const nota = 7.5;

if (nota >= 6) {
    console.log("Aprovado");
} else if (nota >= 4) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

//ternario
const idade = 20;

//versão longa
let status1;
if (idade >= 18) { status1 = "maior"; } else { status1 = "menor"; }

//versão ternária - mesma coisa em uma linha
const status2 = idade >= 18 ? "maior" : "menor";
console.log(status2); //res: "maior"

//switch

const dia = new Date().getDay(); //0 = domingo.. 6=sábado

switch (dia) {
    case 0:
    case 6:
        console.log("Fim de semana!")
        break //impede "cair" no proximo caso
    case 5:
        console.log("Sexta!")
        break
    default:
        console.log("Dia útil!")
}

//for
for (let i = 1; i <= 5; i++) {
    console.log("Volta " + i)
}
//Volta 1, Volta 2, ...

//while
let senha = '';
let n = 3;
while (n > 0) {
    console.log("Tentativas: " + n)
    n--;
}

//for...of

const notas = [8, 5, 9, 6];

for (const nota of notas) {
    console.log(nota) //8, depois 5, depois 9 e depois 6
}

//também funciona com string, caractere a caractere
for (const letra of "abc") {
    console.log(letra) //"a","b","c"
}

//funções

function saudacao(nome) { // nome é o parametro
    return "Olá, " + nome; //return devolve o resultado
}

saudacao("Aleixo"); //"Olá, Aleixo" - "Aleixo" é o argumento
saudacao("Isabella");

//função com return
function dobro(n){
    return n*2;
}
const r = dobro(5); // r = 10

//função sem return
function avisar(msg){
    console.log(msg);
}
const r2 = avisar("oi"); // r = undefined

//valor padrão: usado quando o argumento não é usado
function saudacao2(nome = 'visitante'){
    return "Olá, " + nome;
}

const mult = function (a,b) { //2. expressão, função sem nome numa variavel
    return a * b;
};

const sub = (a,b) => a - b; //3. arrow function (forma curta)

const quad = n => n*n; //1 parâmetro: parâmetro opcionais
const oi = () => 'olá'; //0 parâmetro: parênteses vazios obrigatórios