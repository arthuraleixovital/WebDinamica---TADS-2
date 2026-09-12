const campo = document.querySelector('#campo')
const result = document.querySelector('#result')
const botao = document.querySelector('#add')

const addItem = () => {
    const texto = campo.value

    if (texto === '') return

    const item = document.createElement('li')
    item.textContent = texto

    const remover = document.createElement('span')
    remover.textContent = ' x'
    remover.style.cursor = 'pointer'
    remover.style.color = 'red'

    remover.addEventListener('click', () => {
        item.remove()
    })

    item.appendChild(remover)
    result.appendChild(item)

    campo.value = ''
}

botao.addEventListener('click', addItem)

campo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addItem()
    }
})