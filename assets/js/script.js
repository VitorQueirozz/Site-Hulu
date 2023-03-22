let login = document.querySelector('.login')
let closeFormulario = document.querySelector('#close-form')
let botaoMenuMobile = document.querySelector('.botao-mobile')
let loginBtnModal = document.querySelector('.login-btn-modal')

//ativa o login no modo Desktop
function logIn() {
    let fade = document.querySelector('.fade')
    //let modal = document.querySelector('.modal')
    fade.classList.add('ativo')
}

//Para fechar o formulario no X
function closeFor() {
    let fade = document.querySelector('.fade')
    let modal = document.querySelector('.modal')
    fade.classList.remove('ativo')
    limparFormulario()
}

//Limpa o formulário
function limparFormulario() {
    //reseta o formulario todo
    document.getElementById('formulario').reset()
    //reseta as bordas vermelhas e a label de aviso
    document.getElementById('email').style.border = '1px solid rgb(146, 145, 145)'
    document.getElementById('label-email').style.display = 'none'
    document.getElementById('senha').style.border = '1px solid rgb(146, 145, 145)'
    document.getElementById('label-senha').style.display = 'none'
}

//Ativa o botao menu no modo Mobile
function ativaMenuModal(){
    let modalLogin = document.querySelector('.modal-login')
    modalLogin.classList.toggle('ativo')
}

//Ativa o Botao (LOG IN) dentro do menu mobile
function btnFormMobile() {
    let fade = document.querySelector('.fade')
    let modalLogin = document.querySelector('.modal-login')
    fade.classList.add('ativo')
    modalLogin.classList.remove('ativo')
}

login.addEventListener('click', logIn)
closeFormulario.addEventListener('click', closeFor)
botaoMenuMobile.addEventListener('click', ativaMenuModal)
loginBtnModal.addEventListener('click', btnFormMobile)
