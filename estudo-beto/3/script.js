const numero = document.querySelector('#numero')
const botao = document.querySelector('#verificar')
const resultado = document.querySelector('#resultado')
const limite = document.querySelector('#limite')

function verificar(){
    if (numero.value == ''){
        alert('Digite um valor!')
        return
    }

    let valor = Number(numero.value)
    let texto = ''
    const linha = document.createElement('span');

    if (valor > 0){
        texto += `O numero ${valor} é positivo e`;
        texto += parimpar(valor);
        texto += verificarlimite(valor);
        linha.style.color = 'green'
    } else if(valor == 0){
        texto += `O numero ${valor} é ZERO`;
        texto += verificarlimite(valor);
    } else {
        texto += `O numero ${valor} é negativo e`;
        texto += parimpar(valor)
        texto += verificarlimite(valor);
        linha.style.color = 'red'
    }
    
    linha.textContent = texto
    resultado.appendChild(linha)
}

function parimpar(valor){
    if (valor % 2 == 0){
        return ' é par'
    } else {
        return ' é impar'
    }
}

function verificarlimite(valor){
    const valorlimite = Number(limite.value)
    if(valor <= valorlimite){
        return ' esta dentro do limite!'
    } else {
        return ' esta fora do limite!'
    }
}

botao.addEventListener('click',verificar)