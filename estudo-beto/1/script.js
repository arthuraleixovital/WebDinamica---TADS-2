const campo1 = document.querySelector('#valor1')
const campo2 = document.querySelector('#valor2')
const btn_converter = document.querySelector('#converter')


function conversao(){
    let valor1 = campo1.value
    let resultado = (valor1*1.8) + 32;
    campo2.value = resultado
}

btn_converter.addEventListener('click',conversao)