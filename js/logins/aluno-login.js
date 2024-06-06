

import { getAlunos } from "../cms/urlAlunos.js"

const botao=document.getElementById('botao')

const validarLogin = async () => {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const objUsers = await getAlunos()

    if (email == '' || senha == '') {
        alert('Por Favor preencha todos os campos !!')
    } else {

        let validaUser = false

        objUsers.forEach(user => {
            if (user.email == email && user.cpf == senha) {
                validaUser = true
                localStorage.setItem('idAluno', user.id)
                window.location.href = '../../html/tela-iniciais/inicio.html'
            }
        })

        if (!validaUser) {
            alert('Por favor verifique o email e senha !!')
        }
    }
}

botao.addEventListener('click', validarLogin)
