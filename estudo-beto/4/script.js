const nome = document.querySelector('#nome')
const nota = document.querySelector('#nota')
const botao = document.querySelector('#verificar')
const p = document.querySelector('#p')

function aprovacao(){
    if(nome.value == '' || nota.value == ''){
        alert('Insira os valores em todos os campos.')
        return
    }
    let valor = Number(nota.value)
    let texto = nome.value
    if(valor >= 7){
        texto += ' Aprovado!'
        p.style.color = 'green'
    } else if(valor >= 5 && valor < 7){
        texto += ' Recuperação!'
        p.style.color = 'orange'
    } else {
        texto += ' Reprovado!'
        p.style.color = 'red'
    }
    texto += ' Nota: ' + String(valor)
    p.textContent = texto
}

botao.addEventListener('click',aprovacao)