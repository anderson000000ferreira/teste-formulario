const form = document.getElementById('form')
const caixaCampos = document.querySelectorAll('.importante')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkInput();
})

function checkInput () {
    caixaCampos.forEach((message, posicao,) => {
        const campoObrigatorio = document.querySelectorAll('.txt-obrigatorio')

        if(message.value !== '') {
            message.style.border = '2px solid #3ccc87';
            campoObrigatorio[posicao].style.display = 'none';
        } else {
            message.style.border = '2px solid #f52e2e';
            campoObrigatorio[posicao].style.display = 'block';
        }
    })
}