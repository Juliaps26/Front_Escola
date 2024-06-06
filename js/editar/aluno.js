'use strict'

import { getAlunoById, putAluno } from "../cms/urlAlunos.js"


// Pegando input do link
const inputPosterPreview = document.getElementById('link')

// Pegando a tag img que vai aparecer a foto do link
const imgPosterPreview = document.getElementById('poster')
imgPosterPreview.classList.add('w-capaWidth', 'h-capaHeight')

// Id do botão que vai ser clicado para aparecer a imagem 
const buttonPosterPreview = document.getElementById('button-preview-poster')

const mostrarPreview = () => {
    const link = inputPosterPreview.value
    imgPosterPreview.src = link

}

localStorage.setItem('idAluno', 1)

buttonPosterPreview.addEventListener('click', mostrarPreview)

const salvar = document.getElementById('salvar')

async function inserirDados(){
    let aluno = await getAlunoById(localStorage.getItem('idAluno'))

    console.log(aluno);

    const nome = document.getElementById('nome')
    nome.value = aluno.nome

    const dataNascimento = document.getElementById('data')
    dataNascimento.value = aluno.data_nascimento

    const email = document.getElementById('email')
    email.value = aluno.email
  
    const foto = document.getElementById('link')
    foto.value = aluno.foto

    const cpf = document.getElementById('cpf')
    cpf.value = aluno.cpf

    const sexo = document.getElementById('sexo')
    sexo.value = aluno.id_sexo


}

async function pegarDados(){
    let aluno =await getAlunoById(localStorage.getItem('idAluno'))
    const JSONAluno={}

    const nome =document.getElementById('nome').value
    JSONAluno.nome = nome

    const data = document.getElementById('data').value
    JSONAluno.data_nascimento = data

    const email =document.getElementById('email').value
    JSONAluno.email = email

    const cpf =document.getElementById('cpf').value
    JSONAluno.cpf = cpf

    const link = document.getElementById('link').value
    JSONAluno.foto = link

    const sexo = document.getElementById('sexo')
    JSONAluno.id_sexo = sexo.value

   
    return JSONAluno
}

async function atualizarAluno(){
    const dadosAlunos =await pegarDados()
    console.log(dadosAlunos)
    console.log(localStorage.getItem('idAluno'));
    const retorno = await putAluno (dadosAlunos , localStorage.getItem('idAluno'))
    console.log(retorno)
    if(retorno){
        salvar.textContent='Aluno atualizado com sucesso!!'
        // window.location.href='../html/cms.html'
    }
    else
    salvar.textContent='Não foi possivel atualizar!'
}

salvar.addEventListener('click', atualizarAluno)




inserirDados()