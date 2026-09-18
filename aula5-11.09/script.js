let valor = 0;

const botaosoma = document.querySelector('#soma')
const botaosub = document.querySelector('#sub')

resultado = document.querySelector('.result')

function soma(){
    valor += 1;
    resultado.textContent = `Cliquei ${valor} vezes.`
}

function sub(){
    if(valor > 0){
    valor -= 1;
    resultado.textContent = `Cliquei ${valor} vezes.`
    }
}

botaosoma.addEventListener('click', () => {
    soma()
});

botaosub.addEventListener('click', () => {
    sub()
});