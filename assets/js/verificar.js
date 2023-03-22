const inputs = document.querySelectorAll('.required')
const span = document.querySelectorAll('.span')
const form = document.querySelector('.form')
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

function setError(index) {
    inputs[index].style.border = '1px solid red'
    span[index].style.display = 'block'
}

function removeErro(index) {
    inputs[index].style.border = '1px solid rgb(146, 145, 145)'
    span[index].style.display = 'none'
}

function validarEmail() {
    if(!emailRegex.test(inputs[0].value)) {
        setError(0)
    } else {
        removeErro(0)
    }
}

function validarSenha() {
    if(inputs[1].value.length <= 8) {
        setError(1)
    } else {
        removeErro(1)
    }
}

function verficarForm(event) {
    event.preventDefault()
    validarEmail()
    validarSenha()
}

form.addEventListener('submit', verficarForm)