let lista = ["Ferrari","RedBull","Mercedes","McLaren","Audi"];

console.log(lista);
lista.pop()
lista.push("Williams");
lista.shift();
lista.unshift("Alpine");
console.log("A lista alterada ficou desta forma: ",lista);
console.log("Na lista, tem a Audi? 1 se sim, -1 se não.");
lista.indexOf("Audi");
lista.includes("Audi");

const x = document.querySelector("#aleixo")
const a = document.querySelector(".a")
console.log(x,a)

const itens = document.querySelectorAll(".item")
console.log(itens,itens.length,itens[0])
for (const item of itens){
    console.log(item.textContent);
}

const byID = document.getElementById('aleixo')
console.log(byID)

const titulo2 = document.querySelector('#titulo2')

titulo2.textContent = 'Nova turma';
console.log(titulo2.textContent)

const caixa = document.querySelector('.caixa')
caixa.innerHTML = '<strong>Olá</strong>';