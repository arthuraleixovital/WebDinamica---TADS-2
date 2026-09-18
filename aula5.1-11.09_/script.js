const campo = document.querySelector('#campo')
const result = document.querySelector('#result')
const botao = document.querySelector('#add')

const addItem = () => {
    const texto = campo.value

    if (texto === '') return

    const item = document.createElement('li')
    item.textContent = texto

    const remover = document.createElement('button')
    remover.className = 'remover'
    remover.textContent = 'X'
    remover.style.cursor = 'pointer'

    const editar = document.createElement('button')
    editar.className = 'editar'
    editar.textContent = '✏️'
    editar.style.cursor = 'pointer'

    const concluir = document.createElement('button')
    concluir.className = 'concluir'
    concluir.textContent = '✓'
    concluir.style.cursor = 'pointer'

    concluir.addEventListener('click', () => {
    item.style.textDecoration = 'line-through'
    item.style.opacity = '0.5'
    item.removeChild(concluir)
    item.removeChild(remover)
    item.removeChild(editar)
    })

    remover.addEventListener('click', () => {
        item.remove()
    })

    editar.addEventListener('click', () => {
        const campoeditar = document.createElement('input')

        campoeditar.type = 'text'
        campoeditar.value = texto

        item.prepend(campoeditar)

        campoeditar.focus()

        campoeditar.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                item.childNodes[1].textContent = campoeditar.value
                campoeditar.remove()
            }
        })
    })

    item.appendChild(concluir)
    item.appendChild(editar)
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