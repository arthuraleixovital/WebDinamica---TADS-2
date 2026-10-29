const nome = document.querySelector('#nome')
const nota = document.querySelector('#nota')
const botao = document.querySelector('#botao')
const botaoTurma = document.querySelector('#botaoTurma')
const resultado = document.querySelector('#resultado')
const resultado2 = document.querySelector('#resultado2')
let listaAluno = [];
let listaNota = [];

function calculo(){
    if(nome.value == '' || nota.value == ''){
        alert('Insira os valores em todos os campos.')
        return
    }

    listaAluno.push(nome.value)
    listaNota.push(Number(nota.value))

    const linha = document.createElement('span')
    linha.textContent = `${nome.value} - ${nota.value}`

    resultado.appendChild(linha)
    resultado.appendChild(document.createElement('br'))
}

function aprovados(){
    resultado2.innerHTML = ''
    
    function criarLinha(texto) {
    const linha = document.createElement('p')
    linha.textContent = texto
    resultado2.appendChild(linha)
    }


    let Aprovados = listaNota.filter(nota => nota >= 7)
    let qtdAp = Aprovados.length
    let Reprovados = listaNota.filter(nota => nota < 7)
    let qtdRep = Reprovados.length
    let media = (listaNota.reduce((acc, n) => acc + n, 0))/listaNota.length

    criarLinha(`Total de alunos: ${listaAluno.length}`)
    criarLinha(`Aprovados: ${qtdAp}`)
    criarLinha(`Reprovados: ${qtdRep}`)
    criarLinha(`A media da turma foi de: ${media}`)
    if(media >= 7){
        criarLinha("Situação: Turma esta de parabens!")
    } else {
        criarLinha("Situação: Turma precisa melhorar")
    }
}

botao.addEventListener('click', () => {
    calculo()
})

botaoTurma.addEventListener('click', () => {
    aprovados()
})